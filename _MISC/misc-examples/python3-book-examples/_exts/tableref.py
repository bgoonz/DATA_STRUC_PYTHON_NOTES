# Copyright (c) 2014 Doug Hellmann.  All rights reserved.
#
#
#                         All Rights Reserved
#

#

#
"""Extension to allow references to tables.

Use the ``:table:`` role in-line, specifying the title of the
table as set in the ``.. table`` directive.

For example::

    The CPython interpreter accepts several command line options
    to control its behavior, listed in :table:`CPython Command
    Line Option Flags`.

    .. table:: CPython Command Line Option Flags

        ========    =======
        Option      Meaning
        ========    =======
        -B          do not write .py[co] files on import
        -d          debug output from parser
        -E          ignore PYTHON* environment variables
        -i          inspect interactively after running script
        -O          optimize generated bytecode slightly
        -OO         remove doc-strings
        -s          do not add user site directory to sys.path
        -S          do not run 'import site' on initialization
        -t          issue warnings about inconsistent tab usage
        -tt         issue errors for inconsistent tab usage
        -v          verbose
        -3          warn about Python 3.x incompatibilities
        ========    =======

"""

import functools

from docutils import nodes, utils

from sphinx.util import logging

LOG = logging.getLogger(__name__)


class tableref(nodes.reference):
    pass


def _role(typ, rawtext, text, lineno, inliner,
          options={}, content=[], nodeclass=None):
    text = utils.unescape(text)
    pnode = nodeclass(
        rawsource=text,
        text='',
        internal=True,
        refuri=text,
    )
    return [pnode], []


def latex_visit_tableref(self, node):
    if node['ids']:
        id = node['ids'][0]
    else:
        id = 'table:' + node['refuri']
    self.body.append(r'Table~\ref{%s}' % self.idescape(id))
    raise nodes.SkipNode


def latex_depart_tableref(self, node):
    return


def html_visit_tableref(self, node):
    self.body.append('the table below')
    raise nodes.SkipNode


def html_depart_tableref(self, node):
    return


def builder_inited(app):
    LOG.info('defining table role')
    app.add_role(
        'table',
        functools.partial(_role, nodeclass=tableref)
    )


def setup(app):
    LOG.info('initializing tableref')
    app.add_node(
        tableref,
        latex=(latex_visit_tableref, None),
        html=(html_visit_tableref, html_depart_tableref),
    )
    app.connect('builder-inited', builder_inited)