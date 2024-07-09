import React from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
import useNotes from './notes.hook';
import FetchPending from '@components/fetch-pending/fetch-pending';
import CardFolder from '@widgets/notes/card-folder/card-folder';
import CardNote from '@widgets/notes/card-note/card-note';
import ButtonPrimary from "@components/buttons/button";
import Fabs from '@components/fabs/fabs';
import { Add } from 'iconsax-react-native';

const Notes = ({ navigation }) => {
  const {
    notesList,
    noteFoldersList,
    navigateToFolder,
    navigateBack,
    breadcrumbs,
    error,
    isLoading,
    currentFolderId
  } = useNotes();

  console.log("notesListnotesList", notesList);
  
  return (
    <>
    <Template>
      <Banner title={"Notes"} btnBack  />

      <FetchPending isLoading={isLoading} error={error?.message} type={error?.type} />
      {error && <ButtonPrimary type={"blue"} text="Ajouter une note" link={"Note"} />}

      {!error && !isLoading && (
        <View className="flex-col gap-xl w-full">
          {breadcrumbs.length > 0 && (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
              {breadcrumbs.map((breadcrumb, index) => (
                <TouchableOpacity key={index} onPress={() => navigateBack()}>
                  <Text style={{ color: 'blue' }}>{breadcrumb.title} / </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
            <View className="w-full gap-md flex-row flex-wrap" style={{ width: "100%" }}>
              {noteFoldersList && noteFoldersList.map((folder, key) => (
                <CardFolder key={key} data={folder} onPress={() => navigateToFolder(folder)} />
              ))}
            </View>
            <View className="w-full gap-md flex-row flex-wrap">
              {notesList && notesList.map((note, key) => (
                <CardNote key={key} data={note} />
              ))}
            </View>
        </View>
      )}
      </Template>
      <Fabs
        btns={[
          {
            icon: <Add size="24" color="#38BDF8" />,
            text: 'Créer une note',
            delay: 220,
            value: 200,
            action: () => navigation.navigate("Note", {folderId: currentFolderId}),
            colors: { background: "#E2F6FE", foreground: "#38BDF8" }
          },
          {
            icon: <Add size="24" color="#38BDF8" />,
            text: 'Créer un dossier',
            delay: 200,
            value: 140,
            action: () => navigation.navigate("NoteFolderPost"),
            colors: { background: "#E2F6FE", foreground: "#38BDF8" }
          },
        ]}
      />
    
    </>
  );
};

export default Notes;
