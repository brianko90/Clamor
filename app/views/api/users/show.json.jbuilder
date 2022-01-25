json.user do 
  json.partial! "user", user: @user
end

json.servers do 
  @user.servers.each do |server|
    json.set! server.id do
      json.extract! server, :id, :name, :owner_id, :public
    end
  end
end

json.owned_servers do 
  @user.owned_servers.each do |server|
    json.set! server.id do 
      json.extract! server, :id, :name, :owner_id, :public
    end
  end 
end

json.friends do 
  @user.friends.each do |friend|
    json.set! friend.id do
      json.extract! friend, :id, :username, :email
    end
  end
end


