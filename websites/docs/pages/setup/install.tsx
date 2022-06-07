import { CodeSnippet, Tabs } from '@nextail/core';
import type { NextPage } from 'next';
import React from 'react';

import { SelectedButton, UnSelectedButton } from '../../components/Buttons';
import Layout from '../../components/Layout';

const Install: NextPage = () => {
  return (
    <Layout>
      <div className="relative h-full w-full p-4">
        <div className="h-full rounded-xl bg-white p-4 dark:bg-slate-600">
          <h1 className="font-bold"> Installation</h1>
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
                  title: 'Next.JS Starter',
                  content: (
                    <div className="p-4">
                      <h2>Next.js Installation</h2>
                      <p className="pt-2">
                        The easiest way to get started is to use the Next.js
                        starter.
                      </p>
                      <p>
                        Follow the instructions at:{' '}
                        <a
                          className="text-underline text-emerald-500"
                          href="https://github.com/a-smiggle/nextail-template"
                        >
                          nextail-template
                        </a>
                      </p>
                    </div>
                  ),
                },
                {
                  title: 'Next.JS',
                  content: (
                    <div className="p-4">
                      <h2>Next.js Installation</h2>
                      <p>
                        To manually setup NEXTAIL with Next.js, continue below.
                      </p>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>1. Create Your Project</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Use{' '}
                            <a
                              className="text-emerald-500"
                              href="https://nextjs.org/docs/api-reference/create-next-app"
                            >
                              Create Next App
                            </a>{' '}
                            to create a new project. The examples provided
                            create the project with Typescript support.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
# or
pnpm create next-app -- --typescript`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>2. Install Tailwind CSS</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Install Tailwind CSS and its peer dependencies via
                            pnpm/yarn/npm, and then run the init command to
                            generate both{' '}
                            <code className="text-red-700 dark:text-red-300">
                              tailwind.config.js
                            </code>{' '}
                            and{' '}
                            <code className="text-red-700 dark:text-red-300">
                              postcss.config.js
                            </code>
                            .
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>3. Install Nextail</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Install NEXTAIL by using pnpm/yarn/npm. Nextail Core
                            is required to use Nextail UI components. Nextail
                            Providers contains the Context Providers that are
                            useful with an UI application. Nextail Hooks
                            provides React hooks that can be used with your
                            application.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`# Install Nextail Core
pnpm install -D @nextail/core
# Install Nextail Providers (Optional)
pnpm install -D @nextail/providers
# Install Nextail Hooks (Optional)
pnpm install -D @nextail/hooks`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>4. Configure Tailwind Content Paths</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Add the content paths to all of your template files
                            in your{' '}
                            <code className="text-red-700 dark:text-red-300">
                              tailwind.config.js
                            </code>{' '}
                            file.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`module.exports = {
content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "node_modules/@nextail/core/lib/**/*.{js,ts,jsx,tsx}"
],
theme: {
  extend: {},
},
plugins: [],
}`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>5. Add the Tailwind directives to your CSS</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Add the{' '}
                            <code className="text-red-700 dark:text-red-300">
                              @tailwind
                            </code>{' '}
                            directives for each of Tailwind’s layers to your{' '}
                            <code className="text-red-700 dark:text-red-300">
                              ./styles/globals.css
                            </code>{' '}
                            file.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>6. Start your dev server</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Start the dev server by running.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`npm run dev
# or
yarn dev
# or
pnpm dev`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>
                            7. Start using Nextail and Tailwind CSS in your
                            project.
                          </h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Start using Nextail and Tailwind’s utility classes
                            to style your content. Example is using{' '}
                            <code className="text-red-700 dark:text-red-300">
                              index.tsx
                            </code>
                            .
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`import type { NextPage } from 'next';
import Button from '@nextail/core/Button';

const Home: NextPage = () => {
  
  return (
    <>
    <h1 className="font-bold underline">
      Hello world!
    </h1>
    <Button>Nextail Button</Button>
    </>
  );
};

export default Home;`}
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'React',
                  content: (
                    <div className="p-4">
                      <h2>React Installation</h2>
                      <p>
                        To manually setup NEXTAIL with React, continue below.
                      </p>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>1. Create Your Project</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Use Create React App to create a new project. The
                            examples provided create the project with Typescript
                            support.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`npx create-react-app nextail-app --template typescript
# or
yarn create react-app nextail-app --template typescript
# or
pnpm create react-app nextail-app --template typescript`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>2. Install Tailwind CSS</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Install Tailwind CSS and its peer dependencies via
                            pnpm/yarn/npm, and then run the init command to
                            generate both tailwind.config.js and
                            postcss.config.js.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>3. Install Nextail</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Install NEXTAIL by using pnpm/yarn/npm. Nextail Core
                            is required to use Nextail UI components. Nextail
                            Providers contains the Context Providers that are
                            useful with an UI application. Nextail Hooks
                            provides React hooks that can be used with your
                            application.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`# Install Nextail Core
pnpm install -D @nextail/core
# Install Nextail Providers (Optional)
pnpm install -D @nextail/providers
# Install Nextail Hooks (Optional)
pnpm install -D @nextail/hooks`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>4. Configure Tailwind Content Paths</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Add the content paths to all of your template files
                            in your tailwind.config.js file.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`module.exports = {
content: [
  "./src/**/*.{js,jsx,ts,tsx}"
  "node_modules/@nextail/core/lib/**/*.{js,ts,jsx,tsx}"
],
theme: {
extend: {},
},
plugins: [],
}`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>5. Add the Tailwind directives to your CSS</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Add the @tailwind directives for each of Tailwind’s
                            layers to your ./src/index.css file.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>6. Start your dev server</h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Start the dev server by running.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`npm run dev
# or
yarn dev
# or
pnpm dev`}
                        />
                      </div>
                      <div className="flex flex-col justify-between pt-8 md:flex-row">
                        <div className="md:w-1/2">
                          <h3>
                            7. Start using Nextail and Tailwind CSS in your
                            project.
                          </h3>
                          <p className="pb-2 md:w-3/4 md:pb-0">
                            Start using Nextail and Tailwind’s utility classes
                            to style your content. Example is using App.tsx.
                          </p>
                        </div>
                        <CodeSnippet
                          mainStylings={{
                            text: { whitespace: 'whitespace-pre' },
                            border: {
                              borderRadius: 'rounded',
                            },
                          }}
                          data={`import Button from '@nextail/core/Button';

export default function App() {
 
return (
  <>
  <h1 className="font-bold underline">
    Hello world!
  </h1>
  <Button>Nextail Button</Button>
  </>
);
};`}
                        />
                      </div>
                    </div>
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

export default Install;
