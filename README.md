# **Clamor** 

[Clamor](https://clamorapp.herokuapp.com/#/) is a clone of a popular online messaging platform called Discord. Using Clamor, users can create accounts to join communities and to interact with friends in chatrooms. You can be as social as you want, joining popular public servers or just keeping a close knit community with your friends. 

## **Technologies Used**

- Frontend: React, Redux, CSS
- Backend: Ruby on Rails, PostgreSQL
- Live Chat: Action Cable WebSockets
- Storage: Amazon S3
- Production: Heroku

## **Key Features**

### **Live Chat**

- Users can utilize a live chat either through private direct messages or within channels of servers. 

![](app/assets/images/clamorchat.gif)

```javascript
  componentDidMount() {
    this.props.fetchConversation(this.props.match.params.conversationId)
      .then(()=> {
        this.props.cableApp.cable.subscriptions.create({
          channel: 'ConversationsChannel',
          id: this.props.match.params.conversationId
        },
        {
          received: (msg) => {
            this.props.receiveDM(msg)
          }
        })
      })
    this.scrollToBottom();
  }
```

### **Channels and Servers**

- Users can navigate to different servers and join channel conversations by just clicking on the icons or names.

![](app/assets/images/serverschannels.gif)

```javascript

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDM(this.props.match.params.conversationId, this.state)
      .then(()=> {
        this.props.fetchConversation(this.props.match.params.conversationId)
      });
    this.setState({ body: '' });
  }

```

### **Friends and Direct Messages/Group Messages**

- Users can also see their friends and incoming friend requests and can remove them. 

![](app/assets/images/friends.gif)

```javascript

  componentDidMount() {
    this.props.getUserFriends(this.props.currentUserId)
  }

  handleDelete(e, friendId) {
    e.preventDefault();
    this.props.deleteFriend(this.props.currentUserId, friendId)
      .then(() => this.props.getUserFriends(this.props.currentUserId));
  }

```
