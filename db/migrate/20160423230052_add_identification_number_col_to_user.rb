class AddIdentificationNumberColToUser < ActiveRecord::Migration
  def change
    add_column :users, :identification_number, :string
  end
end
