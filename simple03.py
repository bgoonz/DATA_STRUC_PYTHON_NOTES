# lets build up our simulator some more
# now we will add the concept of registers

import sys

HALT = 1
PRINT_TOM = 2
PRINT_NUM = 3
SAVE = 4
PRINT_REG = 5
ADD = 6
# memory
memory = [
    PRINT_TOM, # [0000 0010]
    SAVE, # save the value 65 to register 2
    65,
    2,
    SAVE, # save the value 20 to register 3
    20,
    3,
    ADD, # Add the content of reg 2 and reg 3 together
    2,
    3,
    PRINT_REG,
    2,
    HALT      # [0000 0001] 
]

# flags

# program counter
pc = 0

# registers
register = [0] * 8 # list of 8 registers

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
  
    # DECODE
    elif command == SAVE:
        # EXECUTE
        instruction_size = 3
        num = memory[pc + 1]
        reg = memory[pc + 2]
        register[reg] = num
  
    # DECODE
    elif command == ADD:
        # EXECUTE
        instruction_size = 3
        reg_a = memory[pc + 1]
        reg_b = memory[pc + 2]
        register[reg_a] += register[reg_b]

    # DECODE
    elif command == PRINT_REG:
        # EXECUTE
        instruction_size = 2
        reg = memory[pc + 1]
        print(register[reg])

    # DECODE (ERROR)
    else:
        # EXECUTE
        print(f"Unknown Instruction {command}")
        sys.exit(1)

    pc += instruction_size