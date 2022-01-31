json.channel do
  json.extract! @channel, :id, :name, :server_id
end 

json.channelMessages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :sender_id, :channel_id, :body, :created_at
      json.pfp url_for(message.sender.pfp)
      json.username message.sender.username
    end
  end
end