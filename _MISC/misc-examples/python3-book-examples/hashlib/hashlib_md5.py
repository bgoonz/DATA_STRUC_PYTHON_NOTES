# Copyright (c) 2008 Doug Hellmann All rights reserved.
#
"""Simple MD5 generation.
"""

#end_pymotw_header
import hashlib

from hashlib_data import lorem

h = hashlib.md5()
h.update(lorem.encode('utf-8'))
print(h.hexdigest())
