"""
1. Write the delete method with the assumption that linked list chaining was used for collision resolution.
2. Write the get method with the assumption that linked list chaining was used for collision resolution.
"""
class HashTableEntry:
    """
    Linked List hash table key/value pair
    """
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None


# Hash table can't have fewer than this many slots
MIN_CAPACITY = 8


class HashTable:
    """
    A hash table that with `capacity` buckets
    that accepts string keys
    Implement this.
    """

    def __init__(self, capacity):
        self.capacity = capacity  # Number of buckets in the hash table
        self.storage = [None] * capacity
        self.item_count = 0
        self.MIN_CAPACITY = 8


    def get_num_slots(self):
        """
        Return the length of the list you're using to hold the hash
        table data. (Not the number of items stored in the hash table,
        but the number of slots in the main list.)
        One of the tests relies on this.
        Implement this.
        """
        # Your code here
        return len(self.storage)


    def get_load_factor(self):
        """
        Return the load factor for this hash table.
        Implement this.
        """
        return self.item_count / self.capacity


    def djb2(self, key):
        """
        DJB2 hash, 32-bit
        Implement this, and/or FNV-1.
        """

        # Cast the key to a string and get bytes
        str_key = str(key).encode()

        # Start from an arbitrary large prime
        hash_value = 5381

        # Bit-shift and sum value for each character
        for b in str_key:
            hash_value = ((hash_value << 5) + hash_value) + b
            hash_value &= 0xffffffff  # DJB2 is a 32-bit hash, only keep 32 bits

        return hash_value


    def hash_index(self, key):
        """
        Take an arbitrary key and return a valid integer index
        between within the storage capacity of the hash table.
        """
        return self.djb2(key) % self.capacity

    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        index = self.hash_index(key)

        current_entry = self.storage[index]

        while current_entry is not None and current_entry.key != key:
            current_entry = current_entry.next

        if current_entry is not None:
            current_entry.value = value
        else:
            new_entry = HashTableEntry(key, value)
            new_entry.next = self.storage[index]
            self.storage[index] = new_entry
        
        # TODO: handle resize?
        # increment the item count
        self.item_count += 1

        # if the load factor reaches above 70% suring a put operation
        if self.get_load_factor() > 0.7:
            # double the size of the storage
            self.resize(self.capacity * 2)


    def delete(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        Implement this.
        """
        # Your code here
        index = self.hash_index(key)

        current_entry = self.storage[index]
        last_entry = None

        while current_entry is not None and current_entry.key != key:
            last_entry = current_entry
            current_entry = last_entry.next

        if current_entry is None:
            print("ERROR: Unable to remove the entry with a key of", key)
        else:
            if last_entry is None:
                self.storage[index] = current_entry.next
            else:
                last_entry.next = current_entry.next

        # resizing?
        # decrement the item count
        self.item_count -= 1

        # if the load factor goes less than 20%
        if self.get_load_factor() < 0.2:
            # check that the capacity is greater than the min capacity
            if self.capacity > self.MIN_CAPACITY:
                new_capacity = self.capacity // 2
                # check if the new capacity is smaller than the min capacity
                if new_capacity < self.MIN_CAPACITY:
                    new_capacity = self.MIN_CAPACITY
            # resize to the new capacity
            self.resize(new_capacity)


    def get(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        Implement this.
        """
        # Your code here
        index = self.hash_index(key)

        current_entry = self.storage[index]

        # while the current entry exists
        while current_entry is not None:
            # check if the current entry key is the same as the passed in key
            if current_entry.key == key:
                # return the current entry value
                return current_entry.value
            # traverse to the next entry
            current_entry = current_entry.next
        
        return None

    def resize(self, new_capacity):
        """
        Changes the capacity of the hash table and rehashes all of the key / value pairs
        """
        # hold a ref to the old storage
        old_storage = self.storage

        # set the capacity to a new capacity
        self.capacity = new_capacity

        # create a new storage with the new capacity
        self.storage = [None] * self.capacity

        # set a current entry to None
        current_entry = None

        # grab the old item count bacause we will use the put method which will bash the item count
        old_item_count = self.item_count

        # iterate over each bucket in the old storage
        for bucket_item in old_storage:
            # set current item to the bucket
            current_entry = bucket_item
            # while the current entry exists
            while current_entry is not None:
                # put the current entry key value pair in to the new storage
                self.put(current_entry.key, current_entry.value)
                # traverse to the next node in the linked list
                current_entry = current_entry.next

        # restore the item count to the correct number
        self.item_count = old_item_count




if __name__ == "__main__":
    ht = HashTable(8)

    ht.put("line_1", "'Twas brillig, and the slithy toves")
    ht.put("line_2", "Did gyre and gimble in the wabe:")
    ht.put("line_3", "All mimsy were the borogoves,")
    ht.put("line_4", "And the mome raths outgrabe.")
    ht.put("line_5", '"Beware the Jabberwock, my son!')
    ht.put("line_6", "The jaws that bite, the claws that catch!")
    ht.put("line_7", "Beware the Jubjub bird, and shun")
    ht.put("line_8", 'The frumious Bandersnatch!"')
    ht.put("line_9", "He took his vorpal sword in hand;")
    ht.put("line_10", "Long time the manxome foe he sought--")
    ht.put("line_11", "So rested he by the Tumtum tree")
    ht.put("line_12", "And stood awhile in thought.")

    print("")

    # Test storing beyond capacity
    for i in range(1, 13):
        print(ht.get(f"line_{i}"))

    # Test resizing
    old_capacity = ht.get_num_slots()
    ht.resize(ht.capacity * 2)
    new_capacity = ht.get_num_slots()

    print(f"\nResized from {old_capacity} to {new_capacity}.\n")

    # Test if data intact after resizing
    for i in range(1, 13):
        print(ht.get(f"line_{i}"))

    print("")