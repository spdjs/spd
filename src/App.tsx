import {
  Refine,
  Authenticated,
} from "@refinedev/core";
// import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  AuthPage,
  ErrorComponent,
  useNotificationProvider,
  ThemedLayoutV2,
  ThemedSiderV2,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { dataProvider, liveProvider } from "@refinedev/supabase";
import { App as AntdApp } from "antd";
import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import routerBindings, {
  NavigateToResource,
  CatchAllNavigate,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import {
  SupplierList,
  SupplierCreate,
  SupplierEdit,
  SupplierShow,
} from "./pages/suppliers";
import {
  SettlementTypeList,
  SettlementTypeCreate,
  SettlementTypeEdit,
  SettlementTypeShow,
} from "./pages/settlement-types";
import { supabaseClient } from "./utility";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/header";
import { PageTitle } from "./components/page-title";

import authProvider from "./providers/authProvider";
import { Resources, ResourceKeys } from "./resources";
import { ProjectTitle, DefaultUser } from "./config";
import { I18nProvider } from "@refinedev/core";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider: I18nProvider = {
    translate: (key: string, params: object) => t(key, { ...params }),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            {/* <DevtoolsProvider> */}
              <Refine
                dataProvider={dataProvider(supabaseClient)}
                liveProvider={liveProvider(supabaseClient)}
                authProvider={authProvider}
                routerProvider={routerBindings}
                notificationProvider={useNotificationProvider}
                // i18nProvider={i18nProvider}
                resources={Resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "D2B3eY-hsM2E0-OUYcwl",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2
                          Header={Header}
                          Title={PageTitle}
                          Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource={ResourceKeys.suppliers} />}
                    />
                    <Route path="/suppliers">
                      <Route index element={<SupplierList />} />
                      <Route path="create" element={<SupplierCreate />} />
                      <Route path="edit/:id" element={<SupplierEdit />} />
                      <Route path="show/:id" element={<SupplierShow />} />
                    </Route>
                    <Route path="/settlement-types">
                      <Route index element={<SettlementTypeList />} />
                      <Route path="create" element={<SettlementTypeCreate />} />
                      <Route path="edit/:id" element={<SettlementTypeEdit />} />
                      <Route path="show/:id" element={<SettlementTypeShow />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route
                      path="/login"
                      element={
                        <AuthPage
                          type="login"
                          formProps={{
                            initialValues: DefaultUser,
                          }}
                          title={<PageTitle />}
                        />
                      }
                    />
                    <Route
                      path="/register"
                      element={<AuthPage title={<PageTitle />} type="register" />}
                    />
                    <Route
                      path="/forgot-password"
                      element={<AuthPage title={<PageTitle />} type="forgotPassword" />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              {/* <DevtoolsPanel /> */}
            {/* </DevtoolsProvider> */}
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
