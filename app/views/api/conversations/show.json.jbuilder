json.conversation do 
  json.extract! @conversation, :id, :owner_id
end

json.conversationMessages do
  @conversation.dms.each do |dm|
    json.set! dm.id do
      json.extract! dm, :id, :body, :created_at, :conversation_id, :user_id 
      json.pfp url_for(dm.user.pfp)
      json.username dm.user.username
    end 
  end
end
