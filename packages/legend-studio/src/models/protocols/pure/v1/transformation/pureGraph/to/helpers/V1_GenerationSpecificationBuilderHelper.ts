/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { assertNonEmptyString } from '@finos/legend-studio-shared';
import { GenerationTreeNode } from '../../../../../../../metamodels/pure/model/packageableElements/generationSpecification/GenerationSpecification';
import type { FileGenerationSpecification } from '../../../../../../../metamodels/pure/model/packageableElements/fileGeneration/FileGenerationSpecification';
import type { PackageableElementReference } from '../../../../../../../metamodels/pure/model/packageableElements/PackageableElementReference';
import type { V1_GraphBuilderContext } from '../../../../transformation/pureGraph/to/V1_GraphBuilderContext';
import type { V1_GenerationTreeNode } from '../../../../model/packageableElements/generationSpecification/V1_GenerationSpecification';
import type { V1_PackageableElementPointer } from '../../../../model/packageableElements/V1_PackageableElement';

export const V1_processGenerationTreeNode = (
  generationNode: V1_GenerationTreeNode,
  context: V1_GraphBuilderContext,
): GenerationTreeNode => {
  assertNonEmptyString(
    generationNode.generationElement,
    'Generation tree node generation element is missing',
  );
  assertNonEmptyString(generationNode.id, 'Generation tree node ID is missing');
  const genNode = new GenerationTreeNode(
    context.resolveElement(generationNode.generationElement, false),
  );
  genNode.id = generationNode.id;
  return genNode;
};

export const V1_processFileGenerationPointer = (
  fileGeneration: V1_PackageableElementPointer,
  context: V1_GraphBuilderContext,
): PackageableElementReference<FileGenerationSpecification> => {
  assertNonEmptyString(
    fileGeneration.path,
    'File generation pointer path is missing',
  );
  return context.resolveFileGeneration(fileGeneration.path);
};
