/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { z } from 'zod';
import { defineTool } from './tool.js';

export const snapshot = defineTool({
  schema: {
    name: 'browser_snapshot',
    title: 'Take a snapshot of the browser',
    description: 'Take a snapshot of the browser to read what is on the page.',
    inputSchema: z.object({}),
    type: 'readOnly',
  },

  handle: async (context, params) => {
    return await context.runTask('Capture browser snapshot', true);
  },
});
