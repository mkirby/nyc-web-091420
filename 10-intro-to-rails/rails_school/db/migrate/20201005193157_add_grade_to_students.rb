class AddGradeToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :grade, :integer
  end
end
