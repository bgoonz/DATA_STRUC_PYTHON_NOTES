# lets continue on from simple01.py
# now we will add 2 byte opcodes so that we can print numbers

import sys

HALT = 1
PRINT_TOM = 2
PRINT_NUM = 3
# memory
memory = [
    PRINT_TOM, # [0000 0010]
    PRINT_TOM, # [0000 0010]
    PRINT_TOM, # [0000 0010]
    PRINT_NUM,
    45,
    PRINT_TOM,  # [0000 0010]
    HALT      # [0000 0001] 
]

# flags

# program counter
pc = 0
# state (running)
running = True

# REPL (FETCH, DECODE, EXECUTE)

while running:
    # FETCH
    command = memory[pc]
    # DECODE
    if command == PRINT_TOM:
        # EXECUTE
        instruction_size = 1
        print("Tom")
    # DECODE
    elif command == HALT:
        # EXECUTE
        instruction_size = 1
        running = False
    # DECODE
    elif command == PRINT_NUM:
        # EXECUTE
        instruction_size = 2
        num = memory[pc + 1]
        print(num)
    # DECODE (ERROR)
    else:
        # EXECUTE
        print(f"Unknown Instruction {command}")
        sys.exit(1)

    pc += instruction_size
