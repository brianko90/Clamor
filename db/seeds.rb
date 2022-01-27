# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'open-uri'


User.destroy_all
Server.destroy_all
ServerMembership.destroy_all
Friendship.destroy_all

user1 = User.create({username: 'brian', email: 'brian@gmail.com', password: "1234"})
user2 = User.create({username: 'chris', email: 'chris@gmail.com', password: "1234"})
user3 = User.create({username: 'amanda', email: 'amanda@gmail.com', password: "1234"})
user4 = User.create({username: 'jerry', email: 'jerry@gmail.com', password: "1234"})
user5 = User.create({username: 'laney', email: 'laney@gmail.com', password: "1234"})
user6 = User.create({username: 'jessie', email: 'jessie@gmail.com', password: "1234"})
user7 = User.create({username: 'keith', email: 'keith@gmail.com', password: "1234"})

server1 = Server.create({name: 'aa-cohort', owner_id: user1.id, public: false})
server2 = Server.create({name: 'Anime Group', owner_id: user5.id, public: true})
server3 = Server.create({name: "LoL", owner_id: user3.id, public: true})
server4 = Server.create({name: "cars", owner_id: user7.id, public: true})
server5 = Server.create({name: 'valk fan club', owner_id: user4.id, public: true})
server6 = Server.create({name: 'Coding 101', owner_id: user2.id, public: true})

member1 = ServerMembership.create({user_id: user1.id, server_id: server1.id})
member2 = ServerMembership.create({user_id: user5.id, server_id: server2.id})
member3 = ServerMembership.create({user_id: user3.id, server_id: server3.id})
member4 = ServerMembership.create({user_id: user7.id, server_id: server4.id})
member5 = ServerMembership.create({user_id: user4.id, server_id: server5.id})
member6 = ServerMembership.create({user_id: user2.id, server_id: server6.id})
member7 = ServerMembership.create({user_id: user1.id, server_id: server3.id})
member8 = ServerMembership.create({user_id: user1.id, server_id: server5.id})
member9 = ServerMembership.create({user_id: user1.id, server_id: server2.id})

friend1 = Friendship.create({user_id: user1.id, friend_id: user2.id, status: 3})
friend2 = Friendship.create({user_id: user1.id, friend_id: user3.id, status: 3})
friend3 = Friendship.create({user_id: user1.id, friend_id: user4.id, status: 3})
friend4 = Friendship.create({user_id: user1.id, friend_id: user5.id, status: 3})
friend5 = Friendship.create({user_id: user1.id, friend_id: user6.id, status: 3})
friend6 = Friendship.create({user_id: user1.id, friend_id: user7.id, status: 3})

channel1 = Channel.create({name: "General", server_id: server1.id})
channel2 = Channel.create({name: "Homework", server_id: server1.id})
channel3 = Channel.create({name: "Study Group", server_id: server1.id})
channel4 = Channel.create({name: "Off-topic", server_id: server1.id})