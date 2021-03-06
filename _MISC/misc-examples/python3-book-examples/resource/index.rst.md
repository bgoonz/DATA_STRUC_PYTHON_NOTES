resource \-\-- System Resource Management
=========================================

::: {.module synopsis="System resource management"}
resource
:::

Purpose

:   Manage the system resource limits for a Unix program.

The functions in `resource` probe the current system resources consumed
by a process, and place limits on them to control how much load a
program can impose on a system.

Current Usage
-------------

Use `getrusage()` to probe the resources used by the current process
and/or its children. The return value is a data structure containing
several resource metrics based on the current state of the system.

::: {.note}
::: {.admonition-title}
Note
:::

Not all of the resource values gathered are displayed here. Refer to the
standard library documentation for `resource` for a more complete list.
:::

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
resource\_getrusage.py
:::

Because the test program is extremely simple, it does not use very many
resources.

``` {.sourceCode .none}
$ python3 resource_getrusage.py

User time                 (ru_utime  ) = 0.032299999999999995
System time               (ru_stime  ) = 0.01517
Max. Resident Set Size    (ru_maxrss ) = 9945088
Shared Memory Size        (ru_ixrss  ) = 0
Unshared Memory Size      (ru_idrss  ) = 0
Stack Size                (ru_isrss  ) = 0
Block inputs              (ru_inblock) = 0
Block outputs             (ru_oublock) = 0
```

Resource Limits
---------------

Separate from the current actual usage, it is possible to check the
*limits* imposed on the application, and then change them.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
resource\_getrlimit.py
:::

The return value for each limit is a tuple containing the *soft* limit
imposed by the current configuration and the *hard* limit imposed by the
operating system.

``` {.sourceCode .none}
$ python3 resource_getrlimit.py

Resource limits (soft/hard):
core file size          0/9223372036854775807
CPU time                9223372036854775807/9223372036854775807
file size               9223372036854775807/9223372036854775807
heap size               9223372036854775807/9223372036854775807
stack size              8388608/67104768
resident set size       9223372036854775807/9223372036854775807
number of processes     1418/2128
number of open files    9472/9223372036854775807
lockable memory address 9223372036854775807/9223372036854775807
```

The limits can be changed with `setrlimit()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
resource\_setrlimit\_nofile.py
:::

This example uses `RLIMIT_NOFILE` to control the number of open files
allowed, changing it to a smaller soft limit than the default.

``` {.sourceCode .none}
$ python3 resource_setrlimit_nofile.py

Soft limit starts as  : 9472
Soft limit changed to : 4
random has fd = 3
[Errno 24] Too many open files: '/dev/null'
```

It can also be useful to limit the amount of CPU time a process should
consume, to avoid using too much. When the process runs past the
allotted amount of time, it sent a `SIGXCPU` signal.

::: {.literalinclude caption="" start-after="#end_pymotw_header"}
resource\_setrlimit\_cpu.py
:::

Normally the signal handler should flush all open files and close them,
but in this case it just prints a message and exits.

``` {.sourceCode .none}
$ python3 resource_setrlimit_cpu.py

Soft limit starts as  : 9223372036854775807
Soft limit changed to : 1

Starting: Sun Mar 18 16:21:52 2018
EXPIRED : Sun Mar 18 16:21:53 2018
(time ran out)
```

::: {.seealso}
-   `resource`{.interpreted-text role="pydoc"}
-   `signal`{.interpreted-text role="mod"} \-- For details on
    registering signal handlers.
:::
