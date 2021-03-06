json.user do 
  json.partial! "user", user: @user
  json.pfp url_for(@user.pfp)
  json.set! "serverMemberships" do 
    @user.server_memberships.each do |membership|
      json.set! membership.id do
        json.extract! membership, :id, :user_id, :server_id
      end
    end
  end
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

json.conversations do
  @user.conversations.each do |conversation|
    json.set! conversation.id do 
      json.extract! conversation, :owner_id, :id
      json.members conversation.members.each do |member|
        json.username member.username
        json.pfp url_for(member.pfp)
        json.id member.id
      end
    end
  end
end

