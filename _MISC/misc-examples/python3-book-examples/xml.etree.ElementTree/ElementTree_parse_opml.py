# Copyright (c) 2010 Doug Hellmann.  All rights reserved.
#
"""Parse an OPML file and show something about the results.
"""

# end_pymotw_header
from xml.etree import ElementTree

with open("podcasts.opml", "rt") as f:
    tree = ElementTree.parse(f)

print(tree)
