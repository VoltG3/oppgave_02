#!/bin/bash

# Noklusējuma ports
PORT=8000

# Ja arguments norādīts – izmanto to kā portu
if [ ! -z "$1" ]; then
  PORT=$1
fi

# Parāda pieejamo URL
echo "📡 Server running at: http://localhost:$PORT"

# Palaid Python HTTP serveri
python3 -m http.server $PORT
