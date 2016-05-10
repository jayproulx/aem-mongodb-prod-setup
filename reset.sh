#!/usr/bin/env bash
killprocs mongod
rm -rf data1/*
rm -rf data2/*
rm -rf data3/*
echo Make sure you comment out replication in 1.conf
