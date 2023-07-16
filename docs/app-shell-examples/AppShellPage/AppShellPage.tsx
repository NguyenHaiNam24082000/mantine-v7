import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { getCodeFileIcon } from '@mantine/ds';
import { ExamplesDrawer } from './ExamplesDrawer/ExamplesDrawer';
import { APP_SHELL_EXAMPLES_COMPONENTS } from '../examples';

export function AppShellPage() {
  const router = useRouter();
  const exampleId = router.query.e as string;
  const state = router.query.s as string;

  useEffect(() => {
    if (!(exampleId in APP_SHELL_EXAMPLES_COMPONENTS)) {
      router.replace('/app-shell?e=BasicAppShell');
    }
  }, [exampleId]);

  if (!(exampleId in APP_SHELL_EXAMPLES_COMPONENTS)) {
    return <ExamplesDrawer />;
  }

  const data =
    APP_SHELL_EXAMPLES_COMPONENTS[exampleId as keyof typeof APP_SHELL_EXAMPLES_COMPONENTS];

  return (
    <div>
      {state === 'code' ? (
        <CodeHighlightTabs code={data.code} getFileIcon={getCodeFileIcon} />
      ) : (
        <data.component />
      )}
      <ExamplesDrawer />
    </div>
  );
}