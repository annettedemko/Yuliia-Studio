import os
import anthropic

client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=300,
    messages=[
        {"role": "user", "content": "Привет! Расскажи простыми словами, что делает useState в React."}
    ]
)

print(message.content[0].text)