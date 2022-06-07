import { CodeSnippet, TableSimple, Tabs } from '@nextail/core';
import type { NextPage } from 'next';
import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';
import { nextailTheme } from 'websites/docs/components/NextailPrismTheme';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

const CodeSnippetPage: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold">Alerts</h1>
          <div className="p-4">
            <Tabs
              mainStylings={{
                border: {
                  borderColor: 'border-emerald-200 dark:border-emerald-500',
                },
              }}
              SelectedButton={SelectedButton}
              UnselectedButton={UnSelectedButton}
              data={[
                {
                  title: 'Overview',
                  content: (
                    <div className="p-4">
                      <h2>Code Snippet</h2>
                      <p>Edit ME</p>

                      <h3 className="pt-4">Basic Code Snippet</h3>
                      <div className="md:w-3/4">
                        <Tabs
                          mainStylings={{
                            border: { borderWidth: ' ' },
                            spacing: { padding: 'pl-2' },
                          }}
                          SelectedButton={SelectedButton}
                          UnselectedButton={UnSelectedButton}
                          data={[
                            {
                              title: 'Preview',
                              content: (
                                <div className="flex justify-center rounded border-2 border-emerald-500 bg-emerald-200/20 py-4">
                                  <div className="rounded md:w-3/4">
                                    <div className="flex justify-center">
                                      <CodeSnippet data="<div>Code Here</div>" />
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<CodeSnippet data="<div>Code Here</div>" />`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Formatted Code Snippet</h3>
                      <p>
                        <a href="https://github.com/PrismJS/prism">Prism</a> and{' '}
                        <a href="https://github.com/FormidableLabs/prism-react-renderer">
                          prism-react-render
                        </a>{' '}
                        can be used to format the text you want to display.
                        Compatible langauage{' '}
                        <a href="https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js">
                          here.
                        </a>
                      </p>
                      <div className="md:w-3/4">
                        <Tabs
                          mainStylings={{
                            border: { borderWidth: ' ' },
                            spacing: { padding: 'pl-2' },
                          }}
                          SelectedButton={SelectedButton}
                          UnselectedButton={UnSelectedButton}
                          data={[
                            {
                              title: 'Preview',
                              content: (
                                <div className="flex justify-center rounded border-2 border-emerald-500 bg-emerald-200/20 py-4">
                                  <div className="rounded md:w-3/4">
                                    <div className="flex justify-center">
                                      <CodeSnippet
                                        data={`import CodeSnippet from '@nextail/core/CodeSnippet';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
const exampleCode = '
  (function someDemo() {
    var test = "Hello World!";
    console.log(test);
  })();

  return () => <App />;
  ';
const nextailTheme = dracula;
nextailTheme.plain.backgroundColor = '';

const CodeSnippetPage: NextPage = () => {
  return (
    <CodeSnippet data="Code Here">
      <Highlight
        {...defaultProps}
        theme={nextailTheme}
        code={exampleCode}
        language="jsx"
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={className}
            style={style}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                })}
              >
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({
                      token,
                      key,
                    })}
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </CodeSnippet>
  )
};

export default CodeSnippetPage;`}
                                      >
                                        <Highlight
                                          {...defaultProps}
                                          theme={nextailTheme}
                                          code={exampleCode}
                                          language="jsx"
                                        >
                                          {({
                                            className,
                                            style,
                                            tokens,
                                            getLineProps,
                                            getTokenProps,
                                          }) => (
                                            <pre
                                              className={className}
                                              style={style}
                                            >
                                              {tokens.map((line, i) => (
                                                <div
                                                  key={i}
                                                  {...getLineProps({
                                                    line,
                                                    key: i,
                                                  })}
                                                >
                                                  {line.map((token, key) => (
                                                    <span
                                                      key={key}
                                                      {...getTokenProps({
                                                        token,
                                                        key,
                                                      })}
                                                    />
                                                  ))}
                                                </div>
                                              ))}
                                            </pre>
                                          )}
                                        </Highlight>
                                      </CodeSnippet>
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`import CodeSnippet from '@nextail/core/CodeSnippet';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
const exampleCode = '
  (function someDemo() {
    var test = "Hello World!";
    console.log(test);
  })();

  return () => <App />;
  ';
const nextailTheme = dracula;
nextailTheme.plain.backgroundColor = '';

const CodeSnippetPage: NextPage = () => {
  return (
    <CodeSnippet data="Code Here">
      <Highlight
        {...defaultProps}
        theme={nextailTheme}
        code={exampleCode}
        language="jsx"
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={className}
            style={style}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                })}
              >
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({
                      token,
                      key,
                    })}
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </CodeSnippet>
  )
};

export default CodeSnippetPage;`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>

                      <h3 className="pt-4">Customised Code Snippet</h3>
                      <p>
                        Code Snippets can be customised to change to the
                        container(mainsStylings) and the button(buttonStylings).
                      </p>
                      <div className="md:w-3/4">
                        <Tabs
                          mainStylings={{
                            border: { borderWidth: ' ' },
                            spacing: { padding: 'pl-2' },
                          }}
                          SelectedButton={SelectedButton}
                          UnselectedButton={UnSelectedButton}
                          data={[
                            {
                              title: 'Preview',
                              content: (
                                <div className="flex justify-center rounded border-2 border-emerald-500 bg-emerald-200/20 py-4">
                                  <div className="rounded md:w-3/4">
                                    <div className="flex justify-center">
                                      <CodeSnippet
                                        mainStylings={{
                                          border: {
                                            borderColor: 'border-sky-500',
                                            borderRadius: 'rounded-3xl',
                                          },
                                        }}
                                        buttonStylings={{
                                          text: { textColor: 'text-red-500' },
                                        }}
                                        data="Code"
                                      />
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              title: 'Code',
                              content: (
                                <>
                                  <CodeSnippet
                                    data={`<CodeSnippet
  mainStylings={{
    border: {
      borderColor: 'border-sky-500',
      borderRadius: 'rounded-3xl',
    },
  }}
  buttonStylings={{
    text: { textColor: 'text-red-500' },
  }}
  data="Code"
/>`}
                                  />
                                </>
                              ),
                            },
                          ]}
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Import',
                  content: (
                    <div className="p-4">
                      <h2>Import</h2>
                      <p>
                        The available components can be imported with the below.
                      </p>

                      <CodeSnippet
                        data={`import CodeSnippet from '@nextail/core/CodeSnippet';`}
                      />
                    </div>
                  ),
                },
                {
                  title: 'Props',
                  content: (
                    <Tabs
                      mainStylings={{
                        spacing: { padding: 'pt-4' },
                        border: {
                          borderColor:
                            'border-emerald-200 dark:border-emerald-500',
                        },
                      }}
                      SelectedButton={SelectedButton}
                      UnselectedButton={UnSelectedButton}
                      data={[
                        {
                          title: 'AccordionProps',
                          content: (
                            <>
                              <h2 className="py-4">AccordionProps</h2>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Required']}
                                  rows={[
                                    ['data', 'AccordionData[]', 'yes'],
                                    ['mainStylings', 'TailwindStylings', 'no'],
                                    ['titleStylings', 'TailwindStylings', 'no'],
                                    [
                                      'titleActiveStylings',
                                      'TailwindStylings',
                                      'no',
                                    ],
                                    ['childStylings', 'TailwindStylings', 'no'],
                                    ['flush', 'boolean', 'no'],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                        {
                          title: 'AccordionData',
                          content: (
                            <>
                              <h2 className="py-4">AccordionData</h2>
                              <div className="w-full overflow-auto">
                                <TableSimple
                                  titleStylings={{
                                    border: {
                                      borderColor: 'border-emerald-500',
                                    },
                                  }}
                                  bodyStylings={{
                                    border: {
                                      borderColor: 'border-emerald-300',
                                    },
                                  }}
                                  border
                                  titles={['Property', 'Type', 'Required']}
                                  rows={[
                                    ['title', 'string', 'yes'],
                                    ['content', 'ReactNode', 'yes'],
                                  ]}
                                />
                              </div>
                            </>
                          ),
                        },
                      ]}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CodeSnippetPage;
