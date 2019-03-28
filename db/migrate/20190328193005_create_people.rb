class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name
      t.string :age
      t.string :gender
      t.string :avatar

      t.timestamps
    end
  end
end
