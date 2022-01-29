json.server do
  json.extract! @server, :id, :name, :public, :owner_id
  json.channels @server.channel_ids
end 

json.channels do 
  @server.channels.each do |channel|
    json.set! channel.id do
      json.extract! channel, :id, :name, :server_id 
    end
  end
end

json.serverMembers do 
  @server.members.each do |member|
    json.set! member.id do 
      json.extract! member, :id, :username
      json.pfp url_for(member.pfp)
    end
  end
end

