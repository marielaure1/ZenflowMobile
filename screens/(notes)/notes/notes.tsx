import * as React from "react";
import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';
import useNotes from '@screens/(notes)/notes/notes.hook';
import { ScrollView, View, Text } from 'react-native';
import Fabs from '@components/fabs/fabs';
import FetchPending from '@components/fetch-pending/fetch-pending';
import Card from "@components/cards/card/card";
import ButtonPrimary from "@components/buttons/button";
import CardNote from "@widgets/notes/card-note/card-note";
import AnalyseNumber from "@components/analyse/analyse-number/analyse-number";
import { Add, ChemicalGlass, Layer, Magicpen } from 'iconsax-react-native';
import SearchBar from "@/components/search-bar/search-bar";

export default function Notes({navigation}) {
  const {
    fields, 
    filteredNotes, 
    handleSearch, 
    error, 
    isLoading, 
    notesList
   } = useNotes();
console.log("filteredNotes", filteredNotes);

  return (
    <>
      <Template>
        <Banner title={"Notes"} btnBack={true}/>

          <FetchPending isLoading={isLoading} error={error?.message}type={error?.type}/>
          {error && <ButtonPrimary type={"blue"} text="Ajouter une note" link={"Note"}/>}

            {!error && !isLoading && (
            <View className="flex-col gap-xl w-full">
              
              <SearchBar
                data={filteredNotes}
                allData={notesList}
                fields={fields}
                onSearch={handleSearch}
              />

              {filteredNotes?.length > 0 && (
              <View className="w-full gap-md">
                {filteredNotes && filteredNotes.map((note, key) => (
                  <CardNote key={key} data={note}/>
                ))}
              </View>
              )}
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
          action: () => navigation.navigate("Note"), 
          colors: {background: "#E2F6FE", foreground: "#38BDF8"}
        },
        { 
          icon: <Add size="24" color="#38BDF8" />,
          text: 'Créer une dossier', 
          delay: 200, 
          value: 140, 
          action: () => navigation.navigate("Note"), 
          colors: {background: "#E2F6FE", foreground: "#38BDF8"}
        },
      ]}
      />
    </>
  );
}