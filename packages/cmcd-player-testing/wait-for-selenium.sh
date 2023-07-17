#!/bin/bash

set -e

host="$1"
shift
cmd="$@"

until curl -sSf $host > /dev/null; do
  >&2 echo "Selenium is unavailable - sleeping"
  sleep 1
done

>&2 echo "Selenium is up - executing command"
