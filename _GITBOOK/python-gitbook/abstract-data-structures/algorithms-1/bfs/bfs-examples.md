# BFS Examples

{% tabs %} {% tab title="search-people" %}

```python
from collections import deque
#
# 1. We create a search queue and add the starting vertex to it.
# 2. We mark the starting vertex as searched.
# 3. We loop through the queue.
# 4. We get the next person from the queue and then we check if they’re a mango seller.
# 5. If they are, we print out that they are a mango seller and return.
# 6. If they aren’t, we add all of their neighbors to the search queue.
# 7. We mark the person as searched.
# 8. We keep looping until the queue is empty.


def person_is_seller(name):
    return name[-1] == "m"


graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []


def search(name):
    search_queue = deque()
    search_queue += graph[name]
    # This is how you keep track of which people you've searched before.
    searched = set()
    while search_queue:
        person = search_queue.popleft()
        # Only search this person if you haven't already searched them.
        if person not in searched:
            if person_is_seller(person):
                print(person + " is a mango seller!")
                return True
            else:
                search_queue += graph[person]
                # Marks this person as searched
                searched.add(person)
    return False


search("you")

```

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %} {% endtabs %}
