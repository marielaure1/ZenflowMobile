import * as React from "react";
import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';
import useProjects from '@screens/(projects)/projects/projects.hook';
import { ScrollView, View, Text } from 'react-native';
import Fabs from '@components/fabs/fabs';
import FetchPending from '@components/fetch-pending/fetch-pending';
import ButtonPrimary from "@components/buttons/button";
import CardProject from "@components/cards/card-project/card-project";
import AnalyseNumber from "@components/analyse/analyse-number/analyse-number";
import { Add, ChemicalGlass } from 'iconsax-react-native';
import SearchBar from "@/components/search-bar/search-bar";

export default function Projects({ navigation }) {
  const {
    currentTab,
    setCurrentTab,
    fields,
    filteredProjects,
    handleSearch,
    error,
    isLoading,
    projectsList,
    refetch,
    tabs,
    setTabs
  } = useProjects();

  return (
    <>
      <Template>
        <Banner title={"Projects"} btnBack={true} />
        {!error && !isLoading && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-[30px]">
            {tabs && tabs.map((tab, key) => (
              <TabsViewBasic key={key} view={currentTab} setView={setCurrentTab} data={tab} colors={{ background: tab?.background, foreground: tab?.foreground }} />
            ))}
          </ScrollView>
        )}
        <FetchPending isLoading={isLoading} error={error} type="Not Found" />
        {error && <ButtonPrimary type={"blue"} text="Ajouter un projet" link={"ProjectPost"} />}

        {currentTab == 2 && filteredProjects?.length > 0 && (
          <View className="flex-col gap-xl w-full">
            <AnalyseNumber title={"Nombre de projets"} number={projectsList.length} progress={"-10%"} color={"red"} />
            <AnalyseNumber title={"A rappeler"} number={projectsList?.length} progress={"-10%"} color={"red"} />
            <AnalyseNumber title={"En attente"} number={projectsList?.length} progress={"-10%"} color={"red"} />
            <AnalyseNumber title={"Sans contact depuis 3 mois"} number={projectsList.length} progress={"-10%"} color={"red"} />
          </View>
        )}

        {currentTab == 1 && !error && !isLoading && (
          <View className="flex-col gap-xl w-full">
            <SearchBar
              data={filteredProjects}
              allData={projectsList}
              fields={fields}
              onSearch={handleSearch}
            />
            {filteredProjects?.length > 0 && (
              <View className="w-full gap-md">
                {filteredProjects.map((project, key) => (
                  <CardProject key={key} data={project} />
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
            text: 'Créer un projet',
            delay: 220,
            value: 200,
            action: () => navigation.navigate("ProjectPost"),
            colors: { background: "#E2F6FE", foreground: "#38BDF8" }
          },
          {
            icon: <ChemicalGlass size="24" color="#A78BFA" />,
            text: 'Gérer les champs',
            delay: 200,
            value: 140,
            action: () => navigation.navigate("CustomFieldManage", { schema: "projects" }),
            colors: { background: "#EDE9FE", foreground: "#A78BFA" }
          },
        ]}
      />
    </>
  );
}
