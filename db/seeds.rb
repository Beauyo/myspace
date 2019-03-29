100.times do 
    name = Faker::Superhero.name
    age = Faker::Number.number(10)
    avatar = Faker::Avatar.image(name, '100x400', 'png', 'set4')
    Person.create(name: name, age: age, avatar: avatar)
end


puts "seeded yo"
