#
"""Find the prefix string common to a group of paths.
"""


# end_pymotw_header
import os.path

paths = ["/one/two/three/four", "/one/two/threefold", "/one/two/three/"]
for path in paths:
    print("PATH:", path)

print()
print("PREFIX:", os.path.commonprefix(paths))
