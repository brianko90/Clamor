json.user do 
  json.partial! "user", user: @user
  json.pfp url_for(@user.pfp)
end

json.servers do 
  @user.servers.each do |server|
    json.set! server.id do
      json.extract! server, :id, :name, :owner_id, :public
      json.serverpic url_for(server.serverpic)
      json.channels server.channel_ids
    end
  end
end
# Had to add if else conditional in the reducer

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
      json.pfp url_for(friend.pfp)
    end
  end
end

json.incoming do 
  @user.incoming_requests.each do |friend|
    json.set! friend.id do
      json.extract! friend, :id, :username, :email
      json.pfp url_for(friend.pfp)
    end
  end
end

json.outgoing do 
  @user.outgoing_requests.each do |friend|
    json.set! friend.id do
      json.extract! friend, :id, :username, :email
      json.pfp url_for(friend.pfp)
    end
  end
end

json.friendships 




