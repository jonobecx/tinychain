# Consensus Algorithm

Tinychain uses a lottery system.

Miners "buy a ticket" by posting a transaction containing a guess of the numbers which will be selected at a particular timestamp.

Timestamps are verified from the NIST beacon.

The random string associated with the beacon timestamp is used to generate a seed for the random selection of "winning" numbers.

