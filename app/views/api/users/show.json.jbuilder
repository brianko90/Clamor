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


