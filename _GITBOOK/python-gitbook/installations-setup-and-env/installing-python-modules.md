# Installing Python Modules

## Installing Python Modules

Email

[distutils-sig@python.org](mailto:distutils-sig%40python.org)

As a popular open source development project, Python has an active supporting community of contributors and users that also make their software available for other Python developers to use under open source license terms.

This allows Python users to share and collaborate effectively, benefiting from the solutions others have already created to common (and sometimes even rare!) problems, as well as potentially contributing their own solutions to the common pool.

This guide covers the installation part of the process. For a guide to creating and sharing your own Python projects, refer to the [distribution guide](https://docs.python.org/3/distributing/index.html#distributing-index).

Note

For corporate and other institutional users, be aware that many organisations have their own policies around using and contributing to open source software. Please take such policies into account when making use of the distribution and installation tools provided with Python.

### Key terms

- `pip` is the preferred installer program. Starting with Python 3.4, it is included by default with the Python binary installers.
- A _virtual environment_ is a semi-isolated Python environment that allows packages to be installed for use by a particular application, rather than being installed system wide.
- `venv` is the standard tool for creating virtual environments, and has been part of Python since Python 3.3. Starting with Python 3.4, it defaults to installing `pip` into all created virtual environments.
- `virtualenv` is a third party alternative (and predecessor) to `venv`. It allows virtual environments to be used on versions of Python prior to 3.4, which either don’t provide `venv` at all, or aren’t able to automatically install `pip` into created environments.
- The [Python Packaging Index](https://pypi.org) is a public repository of open source licensed packages made available for use by other Python users.
- the [Python Packaging Authority](https://www.pypa.io) is the group of developers and documentation authors responsible for the maintenance and evolution of the standard packaging tools and the associated metadata and file format standards. They maintain a variety of tools, documentation, and issue trackers on both [GitHub](https://github.com/pypa) and [Bitbucket](https://bitbucket.org/pypa/).
- `distutils` is the original build and distribution system first added to the Python standard library in 1998. While direct use of `distutils` is being phased out, it still laid the foundation for the current packaging and distribution infrastructure, and it not only remains part of the standard library, but its name lives on in other ways (such as the name of the mailing list used to coordinate Python packaging standards development).

Changed in version 3.5: The use of `venv` is now recommended for creating virtual environments.

See also

[Python Packaging User Guide: Creating and using virtual environments](https://packaging.python.org/installing/#creating-virtual-environments)

### Basic usage

The standard packaging tools are all designed to be used from the command line.

The following command will install the latest version of a module and its dependencies from the Python Packaging Index:

```
python -m pip install SomePackage
```

Note

For POSIX users (including Mac OS X and Linux users), the examples in this guide assume the use of a [virtual environment](https://docs.python.org/3/glossary.html#term-virtual-environment).

For Windows users, the examples in this guide assume that the option to adjust the system PATH environment variable was selected when installing Python.

It’s also possible to specify an exact or minimum version directly on the command line. When using comparator operators such as `>`, `<` or some other special character which get interpreted by shell, the package name and the version should be enclosed within double quotes:

```
python -m pip install SomePackage==1.0.4    # specific version
python -m pip install "SomePackage>=1.0.4"  # minimum version
```

Normally, if a suitable module is already installed, attempting to install it again will have no effect. Upgrading existing modules must be requested explicitly:

```
python -m pip install --upgrade SomePackage
```

More information and resources regarding `pip` and its capabilities can be found in the [Python Packaging User Guide](https://packaging.python.org).

Creation of virtual environments is done through the [`venv`](https://docs.python.org/3/library/venv.html#module-venv) module. Installing packages into an active virtual environment uses the commands shown above.

See also

[Python Packaging User Guide: Installing Python Distribution Packages](https://packaging.python.org/installing/)

### How do I …?

These are quick answers or links for some common tasks.

#### … install `pip` in versions of Python prior to Python 3.4?

Python only started bundling `pip` with Python 3.4. For earlier versions, `pip` needs to be “bootstrapped” as described in the Python Packaging User Guide.

See also

[Python Packaging User Guide: Requirements for Installing Packages](https://packaging.python.org/installing/#requirements-for-installing-packages)

#### … install packages just for the current user?

Passing the `--user` option to `python -m pip install` will install a package just for the current user, rather than for all users of the system.

#### … install scientific Python packages?

A number of scientific Python packages have complex binary dependencies, and aren’t currently easy to install using `pip` directly. At this point in time, it will often be easier for users to install these packages by [other means](https://packaging.python.org/science/) rather than attempting to install them with `pip`.

See also

[Python Packaging User Guide: Installing Scientific Packages](https://packaging.python.org/science/)

#### … work with multiple versions of Python installed in parallel?

On Linux, Mac OS X, and other POSIX systems, use the versioned Python commands in combination with the `-m` switch to run the appropriate copy of `pip`:

```
python2   -m pip install SomePackage  # default Python 2
python2.7 -m pip install SomePackage  # specifically Python 2.7
python3   -m pip install SomePackage  # default Python 3
python3.4 -m pip install SomePackage  # specifically Python 3.4
```

Appropriately versioned `pip` commands may also be available.

On Windows, use the `py` Python launcher in combination with the `-m` switch:

```
py -2   -m pip install SomePackage  # default Python 2
py -2.7 -m pip install SomePackage  # specifically Python 2.7
py -3   -m pip install SomePackage  # default Python 3
py -3.4 -m pip install SomePackage  # specifically Python 3.4
```

### Common installation issues

#### Installing into the system Python on Linux

On Linux systems, a Python installation will typically be included as part of the distribution. Installing into this Python installation requires root access to the system, and may interfere with the operation of the system package manager and other components of the system if a component is unexpectedly upgraded using `pip`.

On such systems, it is often better to use a virtual environment or a per-user installation when installing packages with `pip`.

#### Pip not installed

It is possible that `pip` does not get installed by default. One potential fix is:

```
python -m ensurepip --default-pip
```

There are also additional resources for [installing pip.](https://packaging.python.org/tutorials/installing-packages/#install-pip-setuptools-and-wheel)

#### Installing binary extensions

Python has typically relied heavily on source based distribution, with end users being expected to compile extension modules from source as part of the installation process.

With the introduction of support for the binary `wheel` format, and the ability to publish wheels for at least Windows and Mac OS X through the Python Packaging Index, this problem is expected to diminish over time, as users are more regularly able to install pre-built extensions rather than needing to build them themselves.

Some of the solutions for installing [scientific software](https://packaging.python.org/science/) that are not yet available as pre-built `wheel` files may also help with obtaining other binary extensions without needing to build them locally.

## The Python Standard Library[¶](https://docs.python.org/3/library/index.html#the-python-standard-library)

While [The Python Language Reference](https://docs.python.org/3/reference/index.html#reference-index) describes the exact syntax and semantics of the Python language, this library reference manual describes the standard library that is distributed with Python. It also describes some of the optional components that are commonly included in Python distributions.

Python’s standard library is very extensive, offering a wide range of facilities as indicated by the long table of contents listed below. The library contains built-in modules (written in C) that provide access to system functionality such as file I/O that would otherwise be inaccessible to Python programmers, as well as modules written in Python that provide standardized solutions for many problems that occur in everyday programming. Some of these modules are explicitly designed to encourage and enhance the portability of Python programs by abstracting away platform-specifics into platform-neutral APIs.

The Python installers for the Windows platform usually include the entire standard library and often also include many additional components. For Unix-like operating systems Python is normally provided as a collection of packages, so it may be necessary to use the packaging tools provided with the operating system to obtain some or all of the optional components.

In addition to the standard library, there is a growing collection of several thousand components (from individual programs and modules to packages and entire application development frameworks), available from the [Python Package Index](https://pypi.org).

- [Introduction](https://docs.python.org/3/library/intro.html)
  - [Notes on availability](https://docs.python.org/3/library/intro.html#notes-on-availability)
- [Built-in Functions](https://docs.python.org/3/library/functions.html)
- [Built-in Constants](https://docs.python.org/3/library/constants.html)
  - [Constants added by the `site` module](https://docs.python.org/3/library/constants.html#constants-added-by-the-site-module)
- [Built-in Types](https://docs.python.org/3/library/stdtypes.html)
  - [Truth Value Testing](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)
  - [Boolean Operations — `and`, `or`, `not`](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)
  - [Comparisons](https://docs.python.org/3/library/stdtypes.html#comparisons)
  - [Numeric Types — `int`, `float`, `complex`](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)
  - [Iterator Types](https://docs.python.org/3/library/stdtypes.html#iterator-types)
  - [Sequence Types — `list`, `tuple`, `range`](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range)
  - [Text Sequence Type — `str`](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)
  - [Binary Sequence Types — `bytes`, `bytearray`, `memoryview`](https://docs.python.org/3/library/stdtypes.html#binary-sequence-types-bytes-bytearray-memoryview)
  - [Set Types — `set`, `frozenset`](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)
  - [Mapping Types — `dict`](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)
  - [Context Manager Types](https://docs.python.org/3/library/stdtypes.html#context-manager-types)
  - [Type Annotation Types — Generic Alias, Union](https://docs.python.org/3/library/stdtypes.html#type-annotation-types-generic-alias-union)
  - [Other Built-in Types](https://docs.python.org/3/library/stdtypes.html#other-built-in-types)
  - [Special Attributes](https://docs.python.org/3/library/stdtypes.html#special-attributes)
- [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html)
  - [Base classes](https://docs.python.org/3/library/exceptions.html#base-classes)
  - [Concrete exceptions](https://docs.python.org/3/library/exceptions.html#concrete-exceptions)
  - [Warnings](https://docs.python.org/3/library/exceptions.html#warnings)
  - [Exception hierarchy](https://docs.python.org/3/library/exceptions.html#exception-hierarchy)
- [Text Processing Services](https://docs.python.org/3/library/text.html)
  - [`string` — Common string operations](https://docs.python.org/3/library/string.html)
  - [`re` — Regular expression operations](https://docs.python.org/3/library/re.html)
  - [`difflib` — Helpers for computing deltas](https://docs.python.org/3/library/difflib.html)
  - [`textwrap` — Text wrapping and filling](https://docs.python.org/3/library/textwrap.html)
  - [`unicodedata` — Unicode Database](https://docs.python.org/3/library/unicodedata.html)
  - [`stringprep` — Internet String Preparation](https://docs.python.org/3/library/stringprep.html)
  - [`readline` — GNU readline interface](https://docs.python.org/3/library/readline.html)
  - [`rlcompleter` — Completion function for GNU readline](https://docs.python.org/3/library/rlcompleter.html)
- [Binary Data Services](https://docs.python.org/3/library/binary.html)
  - [`struct` — Interpret bytes as packed binary data](https://docs.python.org/3/library/struct.html)
  - [`codecs` — Codec registry and base classes](https://docs.python.org/3/library/codecs.html)
- [Data Types](https://docs.python.org/3/library/datatypes.html)
  - [`datetime` — Basic date and time types](https://docs.python.org/3/library/datetime.html)
  - [`zoneinfo` — IANA time zone support](https://docs.python.org/3/library/zoneinfo.html)
  - [`calendar` — General calendar-related functions](https://docs.python.org/3/library/calendar.html)
  - [`collections` — Container datatypes](https://docs.python.org/3/library/collections.html)
  - [`collections.abc` — Abstract Base Classes for Containers](https://docs.python.org/3/library/collections.abc.html)
  - [`heapq` — Heap queue algorithm](https://docs.python.org/3/library/heapq.html)
  - [`bisect` — Array bisection algorithm](https://docs.python.org/3/library/bisect.html)
  - [`array` — Efficient arrays of numeric values](https://docs.python.org/3/library/array.html)
  - [`weakref` — Weak references](https://docs.python.org/3/library/weakref.html)
  - [`types` — Dynamic type creation and names for built-in types](https://docs.python.org/3/library/types.html)
  - [`copy` — Shallow and deep copy operations](https://docs.python.org/3/library/copy.html)
  - [`pprint` — Data pretty printer](https://docs.python.org/3/library/pprint.html)
  - [`reprlib` — Alternate `repr()` implementation](https://docs.python.org/3/library/reprlib.html)
  - [`enum` — Support for enumerations](https://docs.python.org/3/library/enum.html)
  - [`graphlib` — Functionality to operate with graph-like structures](https://docs.python.org/3/library/graphlib.html)
- [Numeric and Mathematical Modules](https://docs.python.org/3/library/numeric.html)
  - [`numbers` — Numeric abstract base classes](https://docs.python.org/3/library/numbers.html)
  - [`math` — Mathematical functions](https://docs.python.org/3/library/math.html)
  - [`cmath` — Mathematical functions for complex numbers](https://docs.python.org/3/library/cmath.html)
  - [`decimal` — Decimal fixed point and floating point arithmetic](https://docs.python.org/3/library/decimal.html)
  - [`fractions` — Rational numbers](https://docs.python.org/3/library/fractions.html)
  - [`random` — Generate pseudo-random numbers](https://docs.python.org/3/library/random.html)
  - [`statistics` — Mathematical statistics functions](https://docs.python.org/3/library/statistics.html)
- [Functional Programming Modules](https://docs.python.org/3/library/functional.html)
  - [`itertools` — Functions creating iterators for efficient looping](https://docs.python.org/3/library/itertools.html)
  - [`functools` — Higher-order functions and operations on callable objects](https://docs.python.org/3/library/functools.html)
  - [`operator` — Standard operators as functions](https://docs.python.org/3/library/operator.html)
- [File and Directory Access](https://docs.python.org/3/library/filesys.html)
  - [`pathlib` — Object-oriented filesystem paths](https://docs.python.org/3/library/pathlib.html)
  - [`os.path` — Common pathname manipulations](https://docs.python.org/3/library/os.path.html)
  - [`fileinput` — Iterate over lines from multiple input streams](https://docs.python.org/3/library/fileinput.html)
  - [`stat` — Interpreting `stat()` results](https://docs.python.org/3/library/stat.html)
  - [`filecmp` — File and Directory Comparisons](https://docs.python.org/3/library/filecmp.html)
  - [`tempfile` — Generate temporary files and directories](https://docs.python.org/3/library/tempfile.html)
  - [`glob` — Unix style pathname pattern expansion](https://docs.python.org/3/library/glob.html)
  - [`fnmatch` — Unix filename pattern matching](https://docs.python.org/3/library/fnmatch.html)
  - [`linecache` — Random access to text lines](https://docs.python.org/3/library/linecache.html)
  - [`shutil` — High-level file operations](https://docs.python.org/3/library/shutil.html)
- [Data Persistence](https://docs.python.org/3/library/persistence.html)
  - [`pickle` — Python object serialization](https://docs.python.org/3/library/pickle.html)
  - [`copyreg` — Register `pickle` support functions](https://docs.python.org/3/library/copyreg.html)
  - [`shelve` — Python object persistence](https://docs.python.org/3/library/shelve.html)
  - [`marshal` — Internal Python object serialization](https://docs.python.org/3/library/marshal.html)
  - [`dbm` — Interfaces to Unix “databases”](https://docs.python.org/3/library/dbm.html)
  - [`sqlite3` — DB-API 2.0 interface for SQLite databases](https://docs.python.org/3/library/sqlite3.html)
- [Data Compression and Archiving](https://docs.python.org/3/library/archiving.html)
  - [`zlib` — Compression compatible with **gzip**](https://docs.python.org/3/library/zlib.html)
  - [`gzip` — Support for **gzip** files](https://docs.python.org/3/library/gzip.html)
  - [`bz2` — Support for **bzip2** compression](https://docs.python.org/3/library/bz2.html)
  - [`lzma` — Compression using the LZMA algorithm](https://docs.python.org/3/library/lzma.html)
  - [`zipfile` — Work with ZIP archives](https://docs.python.org/3/library/zipfile.html)
  - [`tarfile` — Read and write tar archive files](https://docs.python.org/3/library/tarfile.html)
- [File Formats](https://docs.python.org/3/library/fileformats.html)
  - [`csv` — CSV File Reading and Writing](https://docs.python.org/3/library/csv.html)
  - [`configparser` — Configuration file parser](https://docs.python.org/3/library/configparser.html)
  - [`netrc` — netrc file processing](https://docs.python.org/3/library/netrc.html)
  - [`xdrlib` — Encode and decode XDR data](https://docs.python.org/3/library/xdrlib.html)
  - [`plistlib` — Generate and parse Apple `.plist` files](https://docs.python.org/3/library/plistlib.html)
- [Cryptographic Services](https://docs.python.org/3/library/crypto.html)
  - [`hashlib` — Secure hashes and message digests](https://docs.python.org/3/library/hashlib.html)
  - [`hmac` — Keyed-Hashing for Message Authentication](https://docs.python.org/3/library/hmac.html)
  - [`secrets` — Generate secure random numbers for managing secrets](https://docs.python.org/3/library/secrets.html)
- [Generic Operating System Services](https://docs.python.org/3/library/allos.html)
  - [`os` — Miscellaneous operating system interfaces](https://docs.python.org/3/library/os.html)
  - [`io` — Core tools for working with streams](https://docs.python.org/3/library/io.html)
  - [`time` — Time access and conversions](https://docs.python.org/3/library/time.html)
  - [`argparse` — Parser for command-line options, arguments and sub-commands](https://docs.python.org/3/library/argparse.html)
  - [`getopt` — C-style parser for command line options](https://docs.python.org/3/library/getopt.html)
  - [`logging` — Logging facility for Python](https://docs.python.org/3/library/logging.html)
  - [`logging.config` — Logging configuration](https://docs.python.org/3/library/logging.config.html)
  - [`logging.handlers` — Logging handlers](https://docs.python.org/3/library/logging.handlers.html)
  - [`getpass` — Portable password input](https://docs.python.org/3/library/getpass.html)
  - [`curses` — Terminal handling for character-cell displays](https://docs.python.org/3/library/curses.html)
  - [`curses.textpad` — Text input widget for curses programs](https://docs.python.org/3/library/curses.html#module-curses.textpad)
  - [`curses.ascii` — Utilities for ASCII characters](https://docs.python.org/3/library/curses.ascii.html)
  - [`curses.panel` — A panel stack extension for curses](https://docs.python.org/3/library/curses.panel.html)
  - [`platform` — Access to underlying platform’s identifying data](https://docs.python.org/3/library/platform.html)
  - [`errno` — Standard errno system symbols](https://docs.python.org/3/library/errno.html)
  - [`ctypes` — A foreign function library for Python](https://docs.python.org/3/library/ctypes.html)
- [Concurrent Execution](https://docs.python.org/3/library/concurrency.html)
  - [`threading` — Thread-based parallelism](https://docs.python.org/3/library/threading.html)
  - [`multiprocessing` — Process-based parallelism](https://docs.python.org/3/library/multiprocessing.html)
  - [`multiprocessing.shared_memory` — Provides shared memory for direct access across processes](https://docs.python.org/3/library/multiprocessing.shared_memory.html)
  - [The `concurrent` package](https://docs.python.org/3/library/concurrent.html)
  - [`concurrent.futures` — Launching parallel tasks](https://docs.python.org/3/library/concurrent.futures.html)
  - [`subprocess` — Subprocess management](https://docs.python.org/3/library/subprocess.html)
  - [`sched` — Event scheduler](https://docs.python.org/3/library/sched.html)
  - [`queue` — A synchronized queue class](https://docs.python.org/3/library/queue.html)
  - [`contextvars` — Context Variables](https://docs.python.org/3/library/contextvars.html)
  - [`_thread` — Low-level threading API](https://docs.python.org/3/library/_thread.html)
- [Networking and Interprocess Communication](https://docs.python.org/3/library/ipc.html)
  - [`asyncio` — Asynchronous I/O](https://docs.python.org/3/library/asyncio.html)
  - [`socket` — Low-level networking interface](https://docs.python.org/3/library/socket.html)
  - [`ssl` — TLS/SSL wrapper for socket objects](https://docs.python.org/3/library/ssl.html)
  - [`select` — Waiting for I/O completion](https://docs.python.org/3/library/select.html)
  - [`selectors` — High-level I/O multiplexing](https://docs.python.org/3/library/selectors.html)
  - [`asyncore` — Asynchronous socket handler](https://docs.python.org/3/library/asyncore.html)
  - [`asynchat` — Asynchronous socket command/response handler](https://docs.python.org/3/library/asynchat.html)
  - [`signal` — Set handlers for asynchronous events](https://docs.python.org/3/library/signal.html)
  - [`mmap` — Memory-mapped file support](https://docs.python.org/3/library/mmap.html)
- [Internet Data Handling](https://docs.python.org/3/library/netdata.html)
  - [`email` — An email and MIME handling package](https://docs.python.org/3/library/email.html)
  - [`json` — JSON encoder and decoder](https://docs.python.org/3/library/json.html)
  - [`mailcap` — Mailcap file handling](https://docs.python.org/3/library/mailcap.html)
  - [`mailbox` — Manipulate mailboxes in various formats](https://docs.python.org/3/library/mailbox.html)
  - [`mimetypes` — Map filenames to MIME types](https://docs.python.org/3/library/mimetypes.html)
  - [`base64` — Base16, Base32, Base64, Base85 Data Encodings](https://docs.python.org/3/library/base64.html)
  - [`binhex` — Encode and decode binhex4 files](https://docs.python.org/3/library/binhex.html)
  - [`binascii` — Convert between binary and ASCII](https://docs.python.org/3/library/binascii.html)
  - [`quopri` — Encode and decode MIME quoted-printable data](https://docs.python.org/3/library/quopri.html)
  - [`uu` — Encode and decode uuencode files](https://docs.python.org/3/library/uu.html)
- [Structured Markup Processing Tools](https://docs.python.org/3/library/markup.html)
  - [`html` — HyperText Markup Language support](https://docs.python.org/3/library/html.html)
  - [`html.parser` — Simple HTML and XHTML parser](https://docs.python.org/3/library/html.parser.html)
  - [`html.entities` — Definitions of HTML general entities](https://docs.python.org/3/library/html.entities.html)
  - [XML Processing Modules](https://docs.python.org/3/library/xml.html)
  - [`xml.etree.ElementTree` — The ElementTree XML API](https://docs.python.org/3/library/xml.etree.elementtree.html)
  - [`xml.dom` — The Document Object Model API](https://docs.python.org/3/library/xml.dom.html)
  - [`xml.dom.minidom` — Minimal DOM implementation](https://docs.python.org/3/library/xml.dom.minidom.html)
  - [`xml.dom.pulldom` — Support for building partial DOM trees](https://docs.python.org/3/library/xml.dom.pulldom.html)
  - [`xml.sax` — Support for SAX2 parsers](https://docs.python.org/3/library/xml.sax.html)
  - [`xml.sax.handler` — Base classes for SAX handlers](https://docs.python.org/3/library/xml.sax.handler.html)
  - [`xml.sax.saxutils` — SAX Utilities](https://docs.python.org/3/library/xml.sax.utils.html)
  - [`xml.sax.xmlreader` — Interface for XML parsers](https://docs.python.org/3/library/xml.sax.reader.html)
  - [`xml.parsers.expat` — Fast XML parsing using Expat](https://docs.python.org/3/library/pyexpat.html)
- [Internet Protocols and Support](https://docs.python.org/3/library/internet.html)
  - [`webbrowser` — Convenient web-browser controller](https://docs.python.org/3/library/webbrowser.html)
  - [`cgi` — Common Gateway Interface support](https://docs.python.org/3/library/cgi.html)
  - [`cgitb` — Traceback manager for CGI scripts](https://docs.python.org/3/library/cgitb.html)
  - [`wsgiref` — WSGI Utilities and Reference Implementation](https://docs.python.org/3/library/wsgiref.html)
  - [`urllib` — URL handling modules](https://docs.python.org/3/library/urllib.html)
  - [`urllib.request` — Extensible library for opening URLs](https://docs.python.org/3/library/urllib.request.html)
  - [`urllib.response` — Response classes used by urllib](https://docs.python.org/3/library/urllib.request.html#module-urllib.response)
  - [`urllib.parse` — Parse URLs into components](https://docs.python.org/3/library/urllib.parse.html)
  - [`urllib.error` — Exception classes raised by urllib.request](https://docs.python.org/3/library/urllib.error.html)
  - [`urllib.robotparser` — Parser for robots.txt](https://docs.python.org/3/library/urllib.robotparser.html)
  - [`http` — HTTP modules](https://docs.python.org/3/library/http.html)
  - [`http.client` — HTTP protocol client](https://docs.python.org/3/library/http.client.html)
  - [`ftplib` — FTP protocol client](https://docs.python.org/3/library/ftplib.html)
  - [`poplib` — POP3 protocol client](https://docs.python.org/3/library/poplib.html)
  - [`imaplib` — IMAP4 protocol client](https://docs.python.org/3/library/imaplib.html)
  - [`nntplib` — NNTP protocol client](https://docs.python.org/3/library/nntplib.html)
  - [`smtplib` — SMTP protocol client](https://docs.python.org/3/library/smtplib.html)
  - [`smtpd` — SMTP Server](https://docs.python.org/3/library/smtpd.html)
  - [`telnetlib` — Telnet client](https://docs.python.org/3/library/telnetlib.html)
  - [`uuid` — UUID objects according to **RFC 4122**](https://docs.python.org/3/library/uuid.html)
  - [`socketserver` — A framework for network servers](https://docs.python.org/3/library/socketserver.html)
  - [`http.server` — HTTP servers](https://docs.python.org/3/library/http.server.html)
  - [`http.cookies` — HTTP state management](https://docs.python.org/3/library/http.cookies.html)
  - [`http.cookiejar` — Cookie handling for HTTP clients](https://docs.python.org/3/library/http.cookiejar.html)
  - [`xmlrpc` — XMLRPC server and client modules](https://docs.python.org/3/library/xmlrpc.html)
  - [`xmlrpc.client` — XML-RPC client access](https://docs.python.org/3/library/xmlrpc.client.html)
  - [`xmlrpc.server` — Basic XML-RPC servers](https://docs.python.org/3/library/xmlrpc.server.html)
  - [`ipaddress` — IPv4/IPv6 manipulation library](https://docs.python.org/3/library/ipaddress.html)
- [Multimedia Services](https://docs.python.org/3/library/mm.html)
  - [`audioop` — Manipulate raw audio data](https://docs.python.org/3/library/audioop.html)
  - [`aifc` — Read and write AIFF and AIFC files](https://docs.python.org/3/library/aifc.html)
  - [`sunau` — Read and write Sun AU files](https://docs.python.org/3/library/sunau.html)
  - [`wave` — Read and write WAV files](https://docs.python.org/3/library/wave.html)
  - [`chunk` — Read IFF chunked data](https://docs.python.org/3/library/chunk.html)
  - [`colorsys` — Conversions between color systems](https://docs.python.org/3/library/colorsys.html)
  - [`imghdr` — Determine the type of an image](https://docs.python.org/3/library/imghdr.html)
  - [`sndhdr` — Determine type of sound file](https://docs.python.org/3/library/sndhdr.html)
  - [`ossaudiodev` — Access to OSS-compatible audio devices](https://docs.python.org/3/library/ossaudiodev.html)
- [Internationalization](https://docs.python.org/3/library/i18n.html)
  - [`gettext` — Multilingual internationalization services](https://docs.python.org/3/library/gettext.html)
  - [`locale` — Internationalization services](https://docs.python.org/3/library/locale.html)
- [Program Frameworks](https://docs.python.org/3/library/frameworks.html)
  - [`turtle` — Turtle graphics](https://docs.python.org/3/library/turtle.html)
  - [`cmd` — Support for line-oriented command interpreters](https://docs.python.org/3/library/cmd.html)
  - [`shlex` — Simple lexical analysis](https://docs.python.org/3/library/shlex.html)
- [Graphical User Interfaces with Tk](https://docs.python.org/3/library/tk.html)
  - [`tkinter` — Python interface to Tcl/Tk](https://docs.python.org/3/library/tkinter.html)
  - [`tkinter.colorchooser` — Color choosing dialog](https://docs.python.org/3/library/tkinter.colorchooser.html)
  - [`tkinter.font` — Tkinter font wrapper](https://docs.python.org/3/library/tkinter.font.html)
  - [Tkinter Dialogs](https://docs.python.org/3/library/dialog.html)
  - [`tkinter.messagebox` — Tkinter message prompts](https://docs.python.org/3/library/tkinter.messagebox.html)
  - [`tkinter.scrolledtext` — Scrolled Text Widget](https://docs.python.org/3/library/tkinter.scrolledtext.html)
  - [`tkinter.dnd` — Drag and drop support](https://docs.python.org/3/library/tkinter.dnd.html)
  - [`tkinter.ttk` — Tk themed widgets](https://docs.python.org/3/library/tkinter.ttk.html)
  - [`tkinter.tix` — Extension widgets for Tk](https://docs.python.org/3/library/tkinter.tix.html)
  - [IDLE](https://docs.python.org/3/library/idle.html)
- [Development Tools](https://docs.python.org/3/library/development.html)
  - [`typing` — Support for type hints](https://docs.python.org/3/library/typing.html)
  - [`pydoc` — Documentation generator and online help system](https://docs.python.org/3/library/pydoc.html)
  - [Python Development Mode](https://docs.python.org/3/library/devmode.html)
  - [Effects of the Python Development Mode](https://docs.python.org/3/library/devmode.html#effects-of-the-python-development-mode)
  - [ResourceWarning Example](https://docs.python.org/3/library/devmode.html#resourcewarning-example)
  - [Bad file descriptor error example](https://docs.python.org/3/library/devmode.html#bad-file-descriptor-error-example)
  - [`doctest` — Test interactive Python examples](https://docs.python.org/3/library/doctest.html)
  - [`unittest` — Unit testing framework](https://docs.python.org/3/library/unittest.html)
  - [`unittest.mock` — mock object library](https://docs.python.org/3/library/unittest.mock.html)
  - [`unittest.mock` — getting started](https://docs.python.org/3/library/unittest.mock-examples.html)
  - [2to3 - Automated Python 2 to 3 code translation](https://docs.python.org/3/library/2to3.html)
  - [`test` — Regression tests package for Python](https://docs.python.org/3/library/test.html)
  - [`test.support` — Utilities for the Python test suite](https://docs.python.org/3/library/test.html#module-test.support)
  - [`test.support.socket_helper` — Utilities for socket tests](https://docs.python.org/3/library/test.html#module-test.support.socket_helper)
  - [`test.support.script_helper` — Utilities for the Python execution tests](https://docs.python.org/3/library/test.html#module-test.support.script_helper)
  - [`test.support.bytecode_helper` — Support tools for testing correct bytecode generation](https://docs.python.org/3/library/test.html#module-test.support.bytecode_helper)
  - [`test.support.threading_helper` — Utilities for threading tests](https://docs.python.org/3/library/test.html#module-test.support.threading_helper)
  - [`test.support.os_helper` — Utilities for os tests](https://docs.python.org/3/library/test.html#module-test.support.os_helper)
  - [`test.support.import_helper` — Utilities for import tests](https://docs.python.org/3/library/test.html#module-test.support.import_helper)
  - [`test.support.warnings_helper` — Utilities for warnings tests](https://docs.python.org/3/library/test.html#module-test.support.warnings_helper)
- [Debugging and Profiling](https://docs.python.org/3/library/debug.html)
  - [Audit events table](https://docs.python.org/3/library/audit_events.html)
  - [`bdb` — Debugger framework](https://docs.python.org/3/library/bdb.html)
  - [`faulthandler` — Dump the Python traceback](https://docs.python.org/3/library/faulthandler.html)
  - [`pdb` — The Python Debugger](https://docs.python.org/3/library/pdb.html)
  - [The Python Profilers](https://docs.python.org/3/library/profile.html)
  - [`timeit` — Measure execution time of small code snippets](https://docs.python.org/3/library/timeit.html)
  - [`trace` — Trace or track Python statement execution](https://docs.python.org/3/library/trace.html)
  - [`tracemalloc` — Trace memory allocations](https://docs.python.org/3/library/tracemalloc.html)
- [Software Packaging and Distribution](https://docs.python.org/3/library/distribution.html)
  - [`distutils` — Building and installing Python modules](https://docs.python.org/3/library/distutils.html)
  - [`ensurepip` — Bootstrapping the `pip` installer](https://docs.python.org/3/library/ensurepip.html)
  - [`venv` — Creation of virtual environments](https://docs.python.org/3/library/venv.html)
  - [`zipapp` — Manage executable Python zip archives](https://docs.python.org/3/library/zipapp.html)
- [Python Runtime Services](https://docs.python.org/3/library/python.html)
  - [`sys` — System-specific parameters and functions](https://docs.python.org/3/library/sys.html)
  - [`sysconfig` — Provide access to Python’s configuration information](https://docs.python.org/3/library/sysconfig.html)
  - [`builtins` — Built-in objects](https://docs.python.org/3/library/builtins.html)
  - [`__main__` — Top-level code environment](https://docs.python.org/3/library/__main__.html)
  - [`warnings` — Warning control](https://docs.python.org/3/library/warnings.html)
  - [`dataclasses` — Data Classes](https://docs.python.org/3/library/dataclasses.html)
  - [`contextlib` — Utilities for `with`-statement contexts](https://docs.python.org/3/library/contextlib.html)
  - [`abc` — Abstract Base Classes](https://docs.python.org/3/library/abc.html)
  - [`atexit` — Exit handlers](https://docs.python.org/3/library/atexit.html)
  - [`traceback` — Print or retrieve a stack traceback](https://docs.python.org/3/library/traceback.html)
  - [`__future__` — Future statement definitions](https://docs.python.org/3/library/__future__.html)
  - [`gc` — Garbage Collector interface](https://docs.python.org/3/library/gc.html)
  - [`inspect` — Inspect live objects](https://docs.python.org/3/library/inspect.html)
  - [`site` — Site-specific configuration hook](https://docs.python.org/3/library/site.html)
- [Custom Python Interpreters](https://docs.python.org/3/library/custominterp.html)
  - [`code` — Interpreter base classes](https://docs.python.org/3/library/code.html)
  - [`codeop` — Compile Python code](https://docs.python.org/3/library/codeop.html)
- [Importing Modules](https://docs.python.org/3/library/modules.html)
  - [`zipimport` — Import modules from Zip archives](https://docs.python.org/3/library/zipimport.html)
  - [`pkgutil` — Package extension utility](https://docs.python.org/3/library/pkgutil.html)
  - [`modulefinder` — Find modules used by a script](https://docs.python.org/3/library/modulefinder.html)
  - [`runpy` — Locating and executing Python modules](https://docs.python.org/3/library/runpy.html)
  - [`importlib` — The implementation of `import`](https://docs.python.org/3/library/importlib.html)
  - [Using `importlib.metadata`](https://docs.python.org/3/library/importlib.metadata.html)
- [Python Language Services](https://docs.python.org/3/library/language.html)
  - [`ast` — Abstract Syntax Trees](https://docs.python.org/3/library/ast.html)
  - [`symtable` — Access to the compiler’s symbol tables](https://docs.python.org/3/library/symtable.html)
  - [`token` — Constants used with Python parse trees](https://docs.python.org/3/library/token.html)
  - [`keyword` — Testing for Python keywords](https://docs.python.org/3/library/keyword.html)
  - [`tokenize` — Tokenizer for Python source](https://docs.python.org/3/library/tokenize.html)
  - [`tabnanny` — Detection of ambiguous indentation](https://docs.python.org/3/library/tabnanny.html)
  - [`pyclbr` — Python module browser support](https://docs.python.org/3/library/pyclbr.html)
  - [`py_compile` — Compile Python source files](https://docs.python.org/3/library/py_compile.html)
  - [`compileall` — Byte-compile Python libraries](https://docs.python.org/3/library/compileall.html)
  - [`dis` — Disassembler for Python bytecode](https://docs.python.org/3/library/dis.html)
  - [`pickletools` — Tools for pickle developers](https://docs.python.org/3/library/pickletools.html)
- [MS Windows Specific Services](https://docs.python.org/3/library/windows.html)
  - [`msilib` — Read and write Microsoft Installer files](https://docs.python.org/3/library/msilib.html)
  - [`msvcrt` — Useful routines from the MS VC++ runtime](https://docs.python.org/3/library/msvcrt.html)
  - [`winreg` — Windows registry access](https://docs.python.org/3/library/winreg.html)
  - [`winsound` — Sound-playing interface for Windows](https://docs.python.org/3/library/winsound.html)
- [Unix Specific Services](https://docs.python.org/3/library/unix.html)
  - [`posix` — The most common POSIX system calls](https://docs.python.org/3/library/posix.html)
  - [`pwd` — The password database](https://docs.python.org/3/library/pwd.html)
  - [`spwd` — The shadow password database](https://docs.python.org/3/library/spwd.html)
  - [`grp` — The group database](https://docs.python.org/3/library/grp.html)
  - [`crypt` — Function to check Unix passwords](https://docs.python.org/3/library/crypt.html)
  - [`termios` — POSIX style tty control](https://docs.python.org/3/library/termios.html)
  - [`tty` — Terminal control functions](https://docs.python.org/3/library/tty.html)
  - [`pty` — Pseudo-terminal utilities](https://docs.python.org/3/library/pty.html)
  - [`fcntl` — The `fcntl` and `ioctl` system calls](https://docs.python.org/3/library/fcntl.html)
  - [`pipes` — Interface to shell pipelines](https://docs.python.org/3/library/pipes.html)
  - [`resource` — Resource usage information](https://docs.python.org/3/library/resource.html)
  - [`nis` — Interface to Sun’s NIS (Yellow Pages)](https://docs.python.org/3/library/nis.html)
  - [`syslog` — Unix syslog library routines](https://docs.python.org/3/library/syslog.html)
- [Superseded Modules](https://docs.python.org/3/library/superseded.html)
  - [`optparse` — Parser for command line options](https://docs.python.org/3/library/optparse.html)
  - [`imp` — Access the import internals](https://docs.python.org/3/library/imp.html)
- [Undocumented Modules](https://docs.python.org/3/library/undoc.html)
  - [Platform specific modules](https://docs.python.org/3/library/undoc.html#platform-specific-modules)
- [Security Considerations](https://docs.python.org/3/library/security_warnings.html)
