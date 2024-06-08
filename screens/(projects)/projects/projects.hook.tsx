import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
// import TabsViewBasic from '@/components/tabs-view/tabs-view-basic/tabs-view-basic';
import { useState } from 'react';

export default function useProjects() {
  const [tabs, setTabs] = useState("analyse");

  return { tabs, setTabs }
}