#! /usr/bin/env python3
# -*- coding: utf-8; mode: python -*-
""" Small Python 3.4 script to check the von Neumann method for generating a fair coin from a biasied one.

- Reference: https://en.wikipedia.org/wiki/Fair_coin#Fair_results_from_a_biased_coin


- *Date:* Tuesday 22 March 2016.
- *Author:* Lilian Besson, for the MVA Master, (C) 2015-16.
- *Licence:* MIT Licence (http://lbesson.mit-license.org).
"""

# Python 2 compatibility if needed
from __future__ import print_function, division
import numpy as np


def coin(p=0.5):
    """ 1 with probability = p, 0 with probability 1 - p. """
    return 1 * (np.random.random() < p)


def vonNeumann(q=0.5):
    """ Use von Neumann's rejection algorithm with an unknown coin (Bernoulli q). """
    x, y = coin(q), coin(q)
    while x == y:  # (x, y) not in {(1, 0), (1, 0)}
        x, y = coin(q), coin(q)
    return x


def main(n=1000):
    """ Check that the von Neumann method is indeed simulating a fair coin. """
    print(
        "\n\n- Using n = {} tests of the von Neumann method, with unknown q in (0, 1).".format(
            n
        )
    )
    q = 1.0 / np.pi  # Unknown float number 0.3183098861837907
    tests = [vonNeumann(q) for _ in range(n)]
    assert all(
        i in {0, 1} for i in tests
    ), "Error of the vonNeumann function: a value outside of {0, 1} has been produced..."
    mu, sigma = np.mean(tests), np.var(tests)
    print(
        "For the values x generated by the vonNeumann(q) function:\n Average mu = {:.4g} (should be 0.5) and variance sigma = {:.4g} (should be 0.25).".format(
            mu, sigma
        )
    )
    delta_mu = abs(mu - 0.5) / 0.5
    delta_sigma = abs(sigma - 0.25) / 0.25
    print(
        "Relative errors: delta_mu = {:.5%} and delta sigma = {:.5%} (both should be small).".format(
            delta_mu, delta_sigma
        )
    )
    return mu, sigma


if __name__ == "__main__":
    for n in (10 ** i for i in range(1, 8)):
        main(n)

# End of fairCoin.py
