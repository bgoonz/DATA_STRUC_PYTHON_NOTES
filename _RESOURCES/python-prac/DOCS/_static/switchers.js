(() => {
  'use strict';

  if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
      value(search, rawPos) {
        const pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      },
    });
  }

  // Parses versions in URL segments like:
  // "3", "dev", "release/2.7" or "3.6rc2"
  const version_regexs = [
    '(?:\\d)',
    '(?:\\d\\.\\d[\\w\\d\\.]*)',
    '(?:dev)',
    '(?:release/\\d.\\d[\\x\\d\\.]*)',
  ];

  const all_versions = {
    3.11: 'dev (3.11)',
    '3.10': 'pre (3.10)',
    3.9: '3.9',
    3.8: '3.8',
    3.7: '3.7',
    3.6: '3.6',
    3.5: '3.5',
    2.7: '2.7',
  };
  const all_languages = {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    ja: 'Japanese',
    ko: 'Korean',
    'pt-br': 'Brazilian Portuguese',
    'zh-cn': 'Simplified Chinese',
    'zh-tw': 'Traditional Chinese',
  };

  function quote_attr(str) {
    return '"' + str.replace('"', '\\"') + '"';
  }

  function build_version_select(release) {
    const buf = ['<select id="version_select">'];
    const major_minor = release.split('.').slice(0, 2).join('.');

    $.each(all_versions, (version, title) => {
      if (version == major_minor)
        buf.push(
          '<option value=' +
            quote_attr(version) +
            ' selected="selected">' +
            release +
            '</option>'
        );
      else
        buf.push(
          '<option value=' + quote_attr(version) + '>' + title + '</option>'
        );
    });

    buf.push('</select>');
    return buf.join('');
  }

  function build_language_select(current_language) {
    const buf = ['<select id="language_select">'];

    $.each(all_languages, (language, title) => {
      if (language == current_language)
        buf.push(
          '<option value="' +
            language +
            '" selected="selected">' +
            all_languages[current_language] +
            '</option>'
        );
      else buf.push('<option value="' + language + '">' + title + '</option>');
    });
    if (!(current_language in all_languages)) {
      // In case we're browsing a language that is not yet in all_languages.
      buf.push(
        '<option value="' +
          current_language +
          '" selected="selected">' +
          current_language +
          '</option>'
      );
      all_languages[current_language] = current_language;
    }
    buf.push('</select>');
    return buf.join('');
  }

  function navigate_to_first_existing(urls) {
    // Navigate to the first existing URL in urls.
    const url = urls.shift();
    if (urls.length == 0 || url.startsWith('file:///')) {
      window.location.href = url;
      return;
    }
    $.ajax({
      url: url,
      success() {
        window.location.href = url;
      },
      error() {
        navigate_to_first_existing(urls);
      },
    });
  }

  function on_version_switch() {
    const selected_version =
      $(this).children('option:selected').attr('value') + '/';
    const url = window.location.href;
    const current_language = language_segment_from_url();
    const current_version = version_segment_from_url();
    const new_url = url.replace(
      '/' + current_language + current_version,
      '/' + current_language + selected_version
    );
    if (new_url != url) {
      navigate_to_first_existing([
        new_url,
        url.replace(
          '/' + current_language + current_version,
          '/' + selected_version
        ),
        '/' + current_language + selected_version,
        '/' + selected_version,
        '/',
      ]);
    }
  }

  function on_language_switch() {
    let selected_language =
      $(this).children('option:selected').attr('value') + '/';
    const url = window.location.href;
    const current_language = language_segment_from_url();
    const current_version = version_segment_from_url();
    if (selected_language == 'en/')
      // Special 'default' case for english.
      selected_language = '';
    const new_url = url.replace(
      '/' + current_language + current_version,
      '/' + selected_language + current_version
    );
    if (new_url != url) {
      navigate_to_first_existing([new_url, '/']);
    }
  }

  // Returns the path segment of the language as a string, like 'fr/'
  // or '' if not found.
  function language_segment_from_url() {
    const path = window.location.pathname;
    const language_regexp =
      '/((?:' + Object.keys(all_languages).join('|') + ')/)';
    const match = path.match(language_regexp);
    if (match !== null) return match[1];
    return '';
  }

  // Returns the path segment of the version as a string, like '3.6/'
  // or '' if not found.
  function version_segment_from_url() {
    const path = window.location.pathname;
    const language_segment = language_segment_from_url();
    const version_segment = '(?:(?:' + version_regexs.join('|') + ')/)';
    const version_regexp = language_segment + '(' + version_segment + ')';
    const match = path.match(version_regexp);
    if (match !== null) return match[1];
    return '';
  }

  function create_placeholders_if_missing() {
    const version_segment = version_segment_from_url();
    const language_segment = language_segment_from_url();
    const index = '/' + language_segment + version_segment;

    if ($('.version_switcher_placeholder').length) return;

    const html =
      '<span class="language_switcher_placeholder"></span> \
<span class="version_switcher_placeholder"></span> \
<a href="/" id="indexlink">Documentation</a> &#187;';

    const probable_places = [
      "body>div.related>ul>li:not(.right):contains('Documentation'):first",
      "body>div.related>ul>li:not(.right):contains('documentation'):first",
    ];

    for (let i = 0; i < probable_places.length; i++) {
      const probable_place = $(probable_places[i]);
      if (probable_place.length == 1) {
        probable_place.html(html);
        document.getElementById('indexlink').href = index;
        return;
      }
    }
  }

  $(document).ready(() => {
    const language_segment = language_segment_from_url();
    const current_language = language_segment.replace(/\/+$/g, '') || 'en';
    const version_select = build_version_select(DOCUMENTATION_OPTIONS.VERSION);

    create_placeholders_if_missing();
    $('.version_switcher_placeholder').html(version_select);
    $('.version_switcher_placeholder select').bind('change', on_version_switch);

    const language_select = build_language_select(current_language);

    $('.language_switcher_placeholder').html(language_select);
    $('.language_switcher_placeholder select').bind(
      'change',
      on_language_switch
    );
  });
})();
