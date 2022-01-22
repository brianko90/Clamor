# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create({username: 'brian', email: 'brian@gmail.com', password: "1234"})
User.create({username: 'chris', email: 'chris@gmail.com', password: "1234"})
User.create({username: 'amanda', email: 'amanda@gmail.com', password: "1234"})
User.create({username: 'jerry', email: 'jerry@gmail.com', password: "1234"})
User.create({username: 'laney', email: 'laney@gmail.com', password: "1234"})

Server.create({name: 'aa-cohort', owner_id: 1, public: false})
Server.create({name: 'Anime Group', owner_id: 5, public: true})
Server.create({name: "LoL", owner_id: 3, public: true})

