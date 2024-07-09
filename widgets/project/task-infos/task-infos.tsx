import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '@components/cards/card/card';
import TasksProps from '@interfaces/tasks.interface';
import FieldControl from '@components/fields/field-control'; 
import Flag from '@components/flag/flag'; 
import PriorityEnum from "@enums/priority.enum";
import priorityList from '@constants/priority';

interface TaskInfosProps {
  task: TasksProps;
  editingField: string | null;
  setEditingField: (field: string | null) => void;
  control: any;
  errors: any;
}

const TaskInfos: React.FC<TaskInfosProps> = ({
  task,
  editingField,
  setEditingField,
  control,
  errors
}) => {
  const priority = priorityList.filter((val) => val?.type.includes(task?.priority))
    
    const renderField = ({name, label, type = 'input', options, rules, defaultSelected, item, multiline = false} : {name: string, label: string, type?: string, options?: any, rules?: object, defaultSelected?: any, item?: object, multiline: boolean}) => {
    
        return(
        <View className='flex-col gap-md'>
          <Text className='text-md font-[Poppins600]'>{label}:</Text>
        
          
          {editingField === name ? (
            <FieldControl
              control={control}
              name={name}
              multiline={multiline}
              placeholder={label}
              error={errors[name]}
              type={type}
              options={options}
              rules={rules}
              defaultSelected={defaultSelected}
              item={item}
              className="py-[0px] !bg-blue-500 bg-green-500"
              onBlur={() => setEditingField(null)}
            />
          ) : (
            <>
                {task ? (
                <>
                    {type === "input" && (
                    <TouchableOpacity onPress={() => setEditingField(name)}>
                        <Text>{task ? task[name] : ''}</Text>
                    </TouchableOpacity>
                    )}
                    
                    {name === "priority" && (
                    <Flag onPress={() => {console.log("eeeeeee"); setEditingField(name);} } text={priority[0].text} colors={{ background: priority[0].background, foreground: priority[0].foreground }} />
                    )}
                </>
                ) : (
                    <Text className='text-zinc-500'>Vide</Text>
                )}
             
            </>
          )}
        </View>
      )};

      console.log(task);
      
  return (
    <View style={{ padding: 10 }}>
      <Card>
        {renderField({
          name: 'title', 
          label: 'Titre',
          rules: { 
            required: 'Ce champ est requis'
          }
        })}

        
        {renderField({
          name: 'description', 
          label: 'Description',
          multiline: true,
          rules: { 
            required: 'Ce champ est requis'
          }
        })}
  
        {renderField({
          name: 'dueDate', 
          label: 'Echeance',
          type: 'date'
        })}

        {renderField({
        name: 'priority', 
        label: 'Priority',
        type: "priority",
        defaultSelected: [task ? task?.priority : PriorityEnum.MEDIUM],
        options: [
          { type: PriorityEnum.HIGH, text: "Haute", colors: { background: "#FFCDD2", foreground: "#D32F2F" } },
          { type: PriorityEnum.MEDIUM, text: "Moyen", colors: { background: "#FFF9C4", foreground: "#FBC02D" } },
          { type: PriorityEnum.LOW, text: "Basse", colors: { background: "#C8E6C9", foreground: "#388E3C" } },
          { type: PriorityEnum.URGENT, text: "Urgent", colors: { background: "#C8E6C9", foreground: "#388E3C" } },
        ],
        item: task
        })}
        {/* {renderField({
          name: 'completed', 
          label: 'Completed',
          type: 'checkbox'
        })}
        {renderField({
          name: 'parentTaskId', 
          label: 'Parent Task ID'
        })}
        {renderField({
          name: 'subTasks', 
          label: 'Sub Tasks',
          type: 'select',
          options: task.subTasks || []
        })}
        {renderField({
          name: 'taskCategoryId', 
          label: 'Task Category ID'
        })} */}

      </Card>
    </View>
  );
};

export default TaskInfos;
