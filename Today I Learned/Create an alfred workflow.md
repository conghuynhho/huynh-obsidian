```bash
#!/bin/bash

# List of URLs
urls=(
    "lc-gogo.ggj.ne:7080/"
	"lc-gogo.ggj.ne:7080/mypage/"
    "lc-skijan.ggj.co:8920/"
    "lc-accounts.ggj.ne:8914/"
    "lc-myaccount.ggj.ne:8919/"
    "lc-real-trade.ggj.co:8200/"
    "lc-meet.ggj.ne:8930/"
)

# Icon paths corresponding to the URLs
icons=(
    "ggj.png"
	"ggj.png"
    "skijan.png"
    "icon.png"
    "ggj.png"
    "realtrade.png"
    "ggj.png"
)

# Get the query from the argument
query="{query}"

# Separate the search query and append value using the delimiter '|'
IFS=' ' read -ra params <<< "$query"
search_query="${params[0]}"
append_value="${params[1]}"

# Construct JSON output
json='{"items": ['
for i in "${!urls[@]}"; do
    url="${urls[i]}"
    icon="${icons[i]}"
    # Check if the search query matches the URL or the search query is empty
    if [[ "$url" == *"$search_query"* ]] || [[ -z "$search_query" ]]; then
        # Append the append_value to the URL
        url_with_append="${url}${append_value}"
        json+="{\"title\": \"$url_with_append\", \"arg\": \"$url_with_append\", \"subtitle\": \"Open in browser\", \"icon\": {\"type\": \"default\", \"path\": \"$icon\"}},"
    fi
done
json=${json%,} # Remove the trailing comma
json+=']}'

# Output JSON
echo "$json"

```


## Alfred with obsidian 

**How to create new notes with alfred obsidian workflow**:
- Add this workflow
```python

#!/usr/bin/env python3

import os
import json
import sys

# AI tools URL list
notes_dir_list = [
    {
        'title': 'Create new `Today I Learned` notes',
        'subtitle': 'Today I Learned',
        'arg': 'obsidian://advanced-uri?vault=Huynh&commandid=quickadd%253Achoice%253Ac81fe3c7-e986-421a-97d8-3a87da1db2eb',
        'type': 'file',
        'browser': 'default',
        'icon': {
            'path': 'new.png',
            'type': 'default'
        }
    },
    {
        'title': 'Create new Working Notes',
        'subtitle': 'Working Notes',
        'arg': 'obsidian://advanced-uri?vault=Huynh&commandid=quickadd%253Achoice%253A31d12bc8-eae2-4df0-8126-2007b4dc6f2d',
        'type': 'file',
        'browser': 'default',
        'icon': {
            'path': 'new.png',
            'type': 'default'
        }
    },
    {
        'title': 'Create new TEMP note',
        'subtitle': 'TEMP notes',
        'arg': 'obsidian://advanced-uri?vault=Huynh&commandid=quickadd%253Achoice%253A1cd335fd-0092-4dc4-8811-a35349faae6e',
        'type': 'file',
        'browser': 'default',
        'icon': {
            'path': 'new.png',
            'type': 'default'
        }
    },
    {
        'title': 'Create new Excalidraw note',
        'subtitle': 'Excalidraw',
        'arg': 'obsidian://advanced-uri?vault=Huynh&commandid=quickadd%253Achoice%253A3cebb015-6e77-4efc-baea-78d385390ed3',
        'type': 'file',
        'browser': 'default',
        'icon': {
            'path': 'new.png',
            'type': 'default'
        }
    }

]

def filter_note_list(note_list, query):
    # Filter the list of AI tools using the query
    # Filter base on title and subtitle and arg
    filtered_note_list = []
    for note in note_list:
        if query.lower() in note['title'].lower() or query.lower() in note['subtitle'].lower() or query.lower() in note['arg'].lower():
            filtered_note_list.append(note)
    return filtered_note_list


def main():
    query = sys.argv[1].strip().lower()
    filtered_note_list = filter_note_list(notes_dir_list, query)
    print(json.dumps({'items': filtered_note_list}))
    
if __name__ == '__main__':
    main()

```
