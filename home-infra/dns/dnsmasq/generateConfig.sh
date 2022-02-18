#!/usr/bin/env bash

declare file_input=dnsmasq.yaml
declare file_output=dnsmasq.conf

source .env

# write basic file evaluating enviroment variables
eval  "echo \" $(< $file_input) \"" > $file_output

# Split DNSMASQ_STATIC_LEASES like PATH variable
IFS=';' read -ra leases_array <<< $DNSMASQ_STATIC_LEASES

# add each array element to the end of the file
for i in "${leases_array[@]}"
do
    echo $i >> $file_output
done 