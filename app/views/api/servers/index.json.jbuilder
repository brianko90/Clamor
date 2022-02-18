@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :owner_id, :public
    json.serverpic url_for(server.serverpic)
    json.channels server.channel_ids
  end
end