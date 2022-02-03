# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Server.destroy_all
ServerMembership.destroy_all
Friendship.destroy_all

user1 = User.new({username: 'brian', email: 'brian@gmail.com', password: "1234", tag: "0001"})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Blue.png')
user1.pfp.attach(io: file, filename: 'Pastel-Blue.png')
user1.save
user2 = User.create({username: 'chris', email: 'chris@gmail.com', password: "1234", tag: "4218"})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Blue.png')
user2.pfp.attach(io: file, filename: 'Pastel-Blue.png')
user3 = User.create({username: 'amanda', email: 'amanda@gmail.com', password: "1234", tag: "3264"})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Gray.png')
user3.pfp.attach(io: file, filename: 'Pastel-Gray.png')
user4 = User.create({username: 'jerry', email: 'jerry@gmail.com', password: "1234", tag: "8744"})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Green.png')
user4.pfp.attach(io: file, filename: 'Pastel-Green.png')
user5 = User.create({username: 'laney', email: 'laney@gmail.com', password: "1234", tag: "0123"})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Indigo.png')
user5.pfp.attach(io: file, filename: 'Pastel-Indigo.png')
user6 = User.create({username: 'jessie', email: 'jessie@gmail.com', password: "1234", tag: "1324"})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Orange.png')
user6.pfp.attach(io: file, filename: 'Pastel-Orange.png')
user7 = User.create({username: 'keith', email: 'keith@gmail.com', password: "1234", tag: "0317"})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Gray.png')
user7.pfp.attach(io: file, filename: 'Pastel-Gray.png')

server1 = Server.create({name: 'aa-cohort', owner_id: user1.id, public: false})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/aalogo.png')
server1.serverpic.attach(io: file, filename: 'aalogo.png')
server2 = Server.create({name: 'Anime Group', owner_id: user5.id, public: true})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/anime.png')
server2.serverpic.attach(io: file, filename: 'anime.png')
server3 = Server.create({name: "LoL", owner_id: user3.id, public: true})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/lol.png')
server3.serverpic.attach(io: file, filename: 'lol.png')
server4 = Server.create({name: "cars", owner_id: user7.id, public: true})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/4runner.png')
server4.serverpic.attach(io: file, filename: '4runner.png')
server5 = Server.create({name: 'valk fan club', owner_id: user4.id, public: true})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/valk.png')
server5.serverpic.attach(io: file, filename: 'valk.png')
server6 = Server.create({name: 'Movies!', owner_id: user2.id, public: true})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/popcorn.png')
server6.serverpic.attach(io: file, filename: 'popcorn.png')
server7 = Server.create({name: 'Very Private', owner_id: user1.id, public: private})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/popcorn.png')
server6.serverpic.attach(io: file, filename: 'popcorn.png')



member1 = ServerMembership.create({user_id: user1.id, server_id: server1.id})
member2 = ServerMembership.create({user_id: user5.id, server_id: server2.id})
member3 = ServerMembership.create({user_id: user3.id, server_id: server3.id})
member4 = ServerMembership.create({user_id: user7.id, server_id: server4.id})
member5 = ServerMembership.create({user_id: user4.id, server_id: server5.id})
member6 = ServerMembership.create({user_id: user2.id, server_id: server6.id})
member7 = ServerMembership.create({user_id: user1.id, server_id: server3.id})
member8 = ServerMembership.create({user_id: user1.id, server_id: server5.id})
member9 = ServerMembership.create({user_id: user1.id, server_id: server2.id})
member10 = ServerMembership.create({user_id: user1.id, server_id: server6.id})
member11 = ServerMembership.create({user_id: user2.id, server_id: server1.id})
member12 = ServerMembership.create({user_id: user3.id, server_id: server1.id})
member13 = ServerMembership.create({user_id: user4.id, server_id: server1.id})
member14 = ServerMembership.create({user_id: user5.id, server_id: server1.id})
member15 = ServerMembership.create({user_id: user1.id, server_id: server4.id})
member16 = ServerMembership.create({user_id: user6.id, server_id: server2.id})


friend1 = Friendship.create({user_id: user1.id, friend_id: user2.id, status: 3})
friend2 = Friendship.create({user_id: user1.id, friend_id: user3.id, status: 3})
friend3 = Friendship.create({user_id: user1.id, friend_id: user4.id, status: 3})
friend4 = Friendship.create({user_id: user1.id, friend_id: user5.id, status: 3})
friend5 = Friendship.create({user_id: user1.id, friend_id: user6.id, status: 3})
friend6 = Friendship.create({user_id: user1.id, friend_id: user7.id, status: 3})

#Vice versa friendship since .create does not go through controller
friend7 = Friendship.create({user_id: user2.id, friend_id: user1.id, status: 3})
friend8 = Friendship.create({user_id: user3.id, friend_id: user1.id, status: 3})
friend9 = Friendship.create({user_id: user4.id, friend_id: user1.id, status: 3})
friend10 = Friendship.create({user_id: user5.id, friend_id: user1.id, status: 3})
friend11 = Friendship.create({user_id: user6.id, friend_id: user1.id, status: 3})
friend12 = Friendship.create({user_id: user7.id, friend_id: user1.id, status: 3})

channel1 = Channel.create({name: "General", server_id: server1.id})
channel2 = Channel.create({name: "Homework", server_id: server1.id})
channel3 = Channel.create({name: "Study Group", server_id: server1.id})
channel4 = Channel.create({name: "Off-topic", server_id: server1.id})

channel5 = Channel.create({name: "General", server_id: server2.id})
channel6 = Channel.create({name: "General", server_id: server3.id})
channel7 = Channel.create({name: "General", server_id: server4.id})
channel8 = Channel.create({name: "General", server_id: server5.id})
channel9 = Channel.create({name: "General", server_id: server6.id})

user8 = User.create({username: 'Jimbo', email: 'jimbo@gmail.com', password: "1234", tag: "6782"})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Red.png')
user8.pfp.attach(io: file, filename: 'discordblueicon.png')
user9 = User.create({username: 'Earl', email: 'earl@gmail.com', password: "1234", tag: "8772"})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Yellow.png')
user9.pfp.attach(io: file, filename: 'Pastel-Yellow.png')

incoming1 = Friendship.create({user_id: user1.id, friend_id: user8.id, status: 2})
incoming2 = Friendship.create({user_id: user1.id, friend_id: user9.id, status: 2})

user10 = User.create({username: 'jane', email: 'jane@gmail.com', password: "1234", tag: "9999"})
file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Violet.png')
user10.pfp.attach(io: file, filename: 'Pastel-Violet.png')

outgoing1 = Friendship.create({user_id: user1.id, friend_id: user10.id, status: 1})

message1 = Message.create({sender_id: user1.id, channel_id: channel1.id, body: "hey everyone!"})
message2 = Message.create({sender_id: user2.id, channel_id: channel1.id, body: "hello"})
message3 = Message.create({sender_id: user3.id, channel_id: channel1.id, body: "FSP time"})
message4 = Message.create({sender_id: user4.id, channel_id: channel1.id, body: "lessgo"})
message5 = Message.create({sender_id: user1.id, channel_id: channel3.id, body: "test"})
message6 = Message.create({sender_id: user1.id, channel_id: channel5.id, body: "testing"})
message7 = Message.create({sender_id: user1.id, channel_id: channel6.id, body: "hello"})
message8 = Message.create({sender_id: user1.id, channel_id: channel9.id, body: "pop pop"})
message9 = Message.create({sender_id: user2.id, channel_id: channel9.id, body: "pop"})

convo1 = Conversation.create({owner_id: user1.id})
convoMembership1 = ConversationMembership.create({conversation_id: convo1.id, user_id: user1.id})
convoMembership2 = ConversationMembership.create({conversation_id: convo1.id, user_id: user6.id})

convo2 = Conversation.create({owner_id: user1.id})
convoMembership3 = ConversationMembership.create({conversation_id: convo2.id, user_id: user1.id})
convoMembership4 = ConversationMembership.create({conversation_id: convo2.id, user_id: user6.id})
convoMembership5 = ConversationMembership.create({conversation_id: convo2.id, user_id: user2.id})

convo3 = Conversation.create({owner_id: user3.id})
convoMembership6 = ConversationMembership.create({conversation_id: convo3.id, user_id: user1.id})
convoMembership8 = ConversationMembership.create({conversation_id: convo3.id, user_id: user2.id})

dm1 = DirectMessage.create({user_id: user1.id, conversation_id: convo1.id, body: "hi"})
dm2 = DirectMessage.create({user_id: user6.id, conversation_id: convo1.id, body: "hello"})
dm3 = DirectMessage.create({user_id: user1.id, conversation_id: convo2.id, body: "test"})
dm4 = DirectMessage.create({user_id: user6.id, conversation_id: convo2.id, body: "test test"})
dm5 = DirectMessage.create({user_id: user2.id, conversation_id: convo2.id, body: "hihi"})
dm6 = DirectMessage.create({user_id: user1.id, conversation_id: convo3.id, body: "we test"})
dm7 = DirectMessage.create({user_id: user2.id, conversation_id: convo3.id, body: "we pass?"})


 