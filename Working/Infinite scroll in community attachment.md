
### New WorkFlow

Small tasks:
- Old realtime get room detail from api will be call 2 api.
- Handle scroll down call api to get more.
	- Need to stop interval api realtime when scroll down. (I think it's imposible now)

- Handle store data for attachments
	- How to append it.
	- Handle after upload
- Handle end of list attachments.

### Some test case:
- Scroll down
- Upload new file/image
- Interval.



### What we need
- 30 item per slide
- Scroll at the end of the `attachment-ctn` -> append more attachment to it.
- state to display list attachment
- store (id) state to store the current oldest attachment in the list
### How to append
- One global state to store all attachments
### Concern
What happen when new file arrive on api response.
- Need to append it to the top of the list.



