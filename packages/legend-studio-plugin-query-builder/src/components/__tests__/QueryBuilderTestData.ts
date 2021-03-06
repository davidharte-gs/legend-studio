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

export const simpleProjection = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'project',
      parameters: [
        {
          _type: 'func',
          function: 'getAll',
          parameters: [
            {
              _type: 'class',
              fullPath: 'model::pure::tests::model::simple::Person',
            },
          ],
        },
        {
          _type: 'collection',
          values: [
            {
              _type: 'lambda',
              body: [
                {
                  _type: 'property',
                  property: 'firstName',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'x',
                    },
                  ],
                },
              ],
              parameters: [
                {
                  _type: 'var',
                  name: 'x',
                },
              ],
            },
            {
              _type: 'lambda',
              body: [
                {
                  _type: 'property',
                  property: 'lastName',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'x',
                    },
                  ],
                },
              ],
              parameters: [
                {
                  _type: 'var',
                  name: 'x',
                },
              ],
            },
          ],
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
        },
        {
          _type: 'collection',
          values: [
            {
              _type: 'string',
              values: ['Edited First Name'],
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
            },
            {
              _type: 'string',
              values: ['Last Name'],
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
            },
          ],
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
        },
      ],
    },
  ],
  parameters: [],
};

export const projectionWithChainedProperty = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'project',
      parameters: [
        {
          _type: 'func',
          function: 'getAll',
          parameters: [
            {
              _type: 'class',
              fullPath: 'model::pure::tests::model::simple::Person',
            },
          ],
        },
        {
          _type: 'collection',
          values: [
            {
              _type: 'lambda',
              body: [
                {
                  _type: 'property',
                  property: 'legalName',
                  parameters: [
                    {
                      _type: 'property',
                      property: 'firm',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'x',
                        },
                      ],
                    },
                  ],
                },
              ],
              parameters: [
                {
                  _type: 'var',
                  name: 'x',
                },
              ],
            },
          ],
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
        },
        {
          _type: 'collection',
          values: [
            {
              _type: 'string',
              values: ['Firm/Legal Name'],
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
            },
          ],
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
        },
      ],
    },
  ],
  parameters: [],
};

export const projectWithDerivedProperty = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'project',
      parameters: [
        {
          _type: 'func',
          function: 'getAll',
          parameters: [
            {
              _type: 'class',
              fullPath: 'model::pure::tests::model::simple::Person',
            },
          ],
        },
        {
          _type: 'collection',
          values: [
            {
              _type: 'lambda',
              body: [
                {
                  _type: 'property',
                  property: 'nameWithTitle',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'x',
                    },
                    {
                      _type: 'string',
                      values: ['Mr.'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                  ],
                },
              ],
              parameters: [
                {
                  _type: 'var',
                  name: 'x',
                },
              ],
            },
          ],
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
        },
        {
          _type: 'collection',
          values: [
            {
              _type: 'string',
              values: ['Full Name With Title'],
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
            },
          ],
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
        },
      ],
    },
  ],
  parameters: [],
};

export const projectionWithResultSetModifiers = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'take',
      parameters: [
        {
          _type: 'func',
          function: 'sort',
          parameters: [
            {
              _type: 'func',
              function: 'distinct',
              parameters: [
                {
                  _type: 'func',
                  function: 'project',
                  parameters: [
                    {
                      _type: 'func',
                      function: 'getAll',
                      parameters: [
                        {
                          _type: 'class',
                          fullPath: 'model::pure::tests::model::simple::Person',
                        },
                      ],
                    },
                    {
                      _type: 'collection',
                      values: [
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'property',
                              property: 'firstName',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'x',
                                },
                              ],
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'x',
                            },
                          ],
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'property',
                              property: 'lastName',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'x',
                                },
                              ],
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'x',
                            },
                          ],
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'property',
                              property: 'legalName',
                              parameters: [
                                {
                                  _type: 'property',
                                  property: 'firm',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'x',
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'x',
                            },
                          ],
                        },
                      ],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                    {
                      _type: 'collection',
                      values: [
                        {
                          _type: 'string',
                          values: ['Edited First Name'],
                          multiplicity: {
                            lowerBound: 1,
                            upperBound: 1,
                          },
                        },
                        {
                          _type: 'string',
                          values: ['Last Name'],
                          multiplicity: {
                            lowerBound: 1,
                            upperBound: 1,
                          },
                        },
                        {
                          _type: 'string',
                          values: ['Firm/Legal Name'],
                          multiplicity: {
                            lowerBound: 1,
                            upperBound: 1,
                          },
                        },
                      ],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                  ],
                },
              ],
            },
            {
              _type: 'collection',
              values: [
                {
                  _type: 'func',
                  function: 'asc',
                  parameters: [
                    {
                      _type: 'string',
                      values: ['Edited First Name'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                  ],
                },
                {
                  _type: 'func',
                  function: 'desc',
                  parameters: [
                    {
                      _type: 'string',
                      values: ['Firm/Legal Name'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                  ],
                },
              ],
              multiplicity: {
                lowerBound: 2,
                upperBound: 2,
              },
            },
          ],
        },
        {
          _type: 'integer',
          values: [500],
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
        },
      ],
    },
  ],
  parameters: [],
};

export const getAllWithOneConditionFilter = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'filter',
      parameters: [
        {
          _type: 'func',
          function: 'getAll',
          parameters: [
            {
              _type: 'class',
              fullPath: 'model::pure::tests::model::simple::Person',
            },
          ],
        },
        {
          _type: 'lambda',
          body: [
            {
              _type: 'func',
              function: 'equal',
              parameters: [
                {
                  _type: 'property',
                  property: 'firstName',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'x',
                    },
                  ],
                },
                {
                  _type: 'string',
                  values: ['testFirstName'],
                  multiplicity: {
                    lowerBound: 1,
                    upperBound: 1,
                  },
                },
              ],
            },
          ],
          parameters: [
            {
              _type: 'var',
              name: 'x',
            },
          ],
        },
      ],
    },
  ],
  parameters: [],
};

export const getAllWithGroupedFilter = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'filter',
      parameters: [
        {
          _type: 'func',
          function: 'getAll',
          parameters: [
            {
              _type: 'class',
              fullPath: 'model::pure::tests::model::simple::Person',
            },
          ],
        },
        {
          _type: 'lambda',
          body: [
            {
              _type: 'func',
              function: 'or',
              parameters: [
                {
                  _type: 'func',
                  function: 'equal',
                  parameters: [
                    {
                      _type: 'property',
                      property: 'firstName',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'x',
                        },
                      ],
                    },
                    {
                      _type: 'string',
                      values: ['firstNameTest'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                  ],
                },
                {
                  _type: 'func',
                  function: 'equal',
                  parameters: [
                    {
                      _type: 'property',
                      property: 'lastName',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'x',
                        },
                      ],
                    },
                    {
                      _type: 'string',
                      values: ['lastNameTest'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                  ],
                },
              ],
            },
          ],
          parameters: [
            {
              _type: 'var',
              name: 'x',
            },
          ],
        },
      ],
    },
  ],
  parameters: [],
};

export const fullComplexProjectionQuery = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'take',
      parameters: [
        {
          _type: 'func',
          function: 'sort',
          parameters: [
            {
              _type: 'func',
              function: 'project',
              parameters: [
                {
                  _type: 'func',
                  function: 'filter',
                  parameters: [
                    {
                      _type: 'func',
                      function: 'getAll',
                      parameters: [
                        {
                          _type: 'class',
                          fullPath: 'model::pure::tests::model::simple::Person',
                        },
                      ],
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'func',
                          function: 'or',
                          parameters: [
                            {
                              _type: 'func',
                              function: 'equal',
                              parameters: [
                                {
                                  _type: 'property',
                                  property: 'firstName',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'x',
                                    },
                                  ],
                                },
                                {
                                  _type: 'string',
                                  values: ['testFirstName'],
                                  multiplicity: {
                                    lowerBound: 1,
                                    upperBound: 1,
                                  },
                                },
                              ],
                            },
                            {
                              _type: 'func',
                              function: 'equal',
                              parameters: [
                                {
                                  _type: 'property',
                                  property: 'lastName',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'x',
                                    },
                                  ],
                                },
                                {
                                  _type: 'string',
                                  values: ['testLastName'],
                                  multiplicity: {
                                    lowerBound: 1,
                                    upperBound: 1,
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'x',
                        },
                      ],
                    },
                  ],
                },
                {
                  _type: 'collection',
                  values: [
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'property',
                          property: 'firstName',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'x',
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'x',
                        },
                      ],
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'property',
                          property: 'lastName',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'x',
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'x',
                        },
                      ],
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'property',
                          property: 'nameWithTitle',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'x',
                            },
                            {
                              _type: 'string',
                              values: ['Mr.'],
                              multiplicity: {
                                lowerBound: 1,
                                upperBound: 1,
                              },
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'x',
                        },
                      ],
                    },
                  ],
                  multiplicity: {
                    lowerBound: 1,
                    upperBound: 1,
                  },
                },
                {
                  _type: 'collection',
                  values: [
                    {
                      _type: 'string',
                      values: ['First Name'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                    {
                      _type: 'string',
                      values: ['Last Name'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                    {
                      _type: 'string',
                      values: ['Name With Title'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                  ],
                  multiplicity: {
                    lowerBound: 1,
                    upperBound: 1,
                  },
                },
              ],
            },
            {
              _type: 'collection',
              values: [
                {
                  _type: 'func',
                  function: 'asc',
                  parameters: [
                    {
                      _type: 'string',
                      values: ['First Name'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                  ],
                },
                {
                  _type: 'func',
                  function: 'desc',
                  parameters: [
                    {
                      _type: 'string',
                      values: ['Last Name'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                  ],
                },
                {
                  _type: 'func',
                  function: 'asc',
                  parameters: [
                    {
                      _type: 'string',
                      values: ['Name With Title'],
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                    },
                  ],
                },
              ],
              multiplicity: {
                lowerBound: 3,
                upperBound: 3,
              },
            },
          ],
        },
        {
          _type: 'integer',
          values: [5],
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
        },
      ],
    },
  ],
  parameters: [],
};

// unsupported
export const unSupportedGetAllWithOneConditionFilter = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'filter',
      parameters: [
        {
          _type: 'func',
          function: 'getAll',
          parameters: [
            {
              _type: 'class',
              fullPath: 'model::pure::tests::model::simple::Person',
            },
          ],
        },
        {
          _type: 'lambda',
          body: [
            {
              _type: 'func',
              function: 'testUnSupported',
              parameters: [
                {
                  _type: 'property',
                  property: 'firstName',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'x',
                    },
                  ],
                },
                {
                  _type: 'string',
                  values: ['testFirstName'],
                  multiplicity: {
                    lowerBound: 1,
                    upperBound: 1,
                  },
                },
              ],
            },
          ],
          parameters: [
            {
              _type: 'var',
              name: 'x',
            },
          ],
        },
      ],
    },
  ],
  parameters: [],
};

export const errorInGraphLambda = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'getAll',
      parameters: [
        {
          _type: 'class',
          fullPath: 'model::pure::tests::model::simple::NotFound',
        },
      ],
    },
  ],
  parameters: [],
};

export const unSupportedFunctionName = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'testUnSupported',
      parameters: [
        {
          _type: 'class',
          fullPath: 'model::pure::tests::model::simple::GeographicEntityType',
        },
      ],
    },
  ],
  parameters: [],
};

// model
export const queryBuilderTestData = [
  {
    path: 'model::owl::tests::model::GenderType',
    content: {
      _type: 'Enumeration',
      name: 'GenderType',
      package: 'model::owl::tests::model',
      values: [
        {
          value: 'MALE',
        },
        {
          value: 'FEMALE',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Enumeration',
  },
  {
    path: 'model::owl::tests::model::OrgLevelType',
    content: {
      _type: 'Enumeration',
      name: 'OrgLevelType',
      package: 'model::owl::tests::model',
      values: [
        {
          value: 'VP',
        },
        {
          value: 'MD',
        },
        {
          value: 'PMD',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Enumeration',
  },
  {
    path: 'model::pure::tests::model::simple::GeographicEntityType',
    content: {
      _type: 'Enumeration',
      name: 'GeographicEntityType',
      package: 'model::pure::tests::model::simple',
      values: [
        {
          taggedValues: [
            {
              tag: {
                profile: 'doc',
                value: 'doc',
              },
              value: 'A city, town, village, or other urban area.',
            },
          ],
          value: 'CITY',
        },
        {
          stereotypes: [
            {
              profile: 'doc',
              value: 'deprecated',
            },
          ],
          value: 'COUNTRY',
        },
        {
          taggedValues: [
            {
              tag: {
                profile: 'doc',
                value: 'doc',
              },
              value: 'Any geographic entity other than a city or country.',
            },
          ],
          value: 'REGION',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Enumeration',
  },
  {
    path: 'model::pure::tests::model::simple::ProductSynonymType',
    content: {
      _type: 'Enumeration',
      name: 'ProductSynonymType',
      package: 'model::pure::tests::model::simple',
      values: [
        {
          value: 'CUSIP',
        },
        {
          value: 'ISIN',
        },
        {
          value: 'GSN',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Enumeration',
  },
  {
    path: 'model::owl::tests::model::Business',
    content: {
      _type: 'class',
      name: 'Business',
      package: 'model::owl::tests::model',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'address',
          type: 'String',
        },
      ],
      superTypes: [
        'model::owl::tests::model::Organization',
        'model::owl::tests::model::EntityWithLocation',
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::EntityWithLocation',
    content: {
      _type: 'class',
      name: 'EntityWithLocation',
      package: 'model::owl::tests::model',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'location',
          type: 'model::owl::tests::model::GeoLocation',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::Executive',
    content: {
      _type: 'class',
      name: 'Executive',
      package: 'model::owl::tests::model',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'organization',
          type: 'model::owl::tests::model::Business',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'seniorityLevel',
          type: 'model::owl::tests::model::OrgLevelType',
        },
      ],
      superTypes: ['model::owl::tests::model::Professional'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::FemaleExecutive',
    content: {
      _type: 'class',
      name: 'FemaleExecutive',
      package: 'model::owl::tests::model',
      superTypes: [
        'model::owl::tests::model::Executive',
        'model::owl::tests::model::FemalePerson',
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::FemalePerson',
    content: {
      _type: 'class',
      name: 'FemalePerson',
      package: 'model::owl::tests::model',
      superTypes: ['model::owl::tests::model::Person'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::GeoLocation',
    content: {
      _type: 'class',
      name: 'GeoLocation',
      package: 'model::owl::tests::model',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'engName',
          type: 'String',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::MaleExecutive',
    content: {
      _type: 'class',
      name: 'MaleExecutive',
      package: 'model::owl::tests::model',
      superTypes: [
        'model::owl::tests::model::Executive',
        'model::owl::tests::model::MalePerson',
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::MalePerson',
    content: {
      _type: 'class',
      name: 'MalePerson',
      package: 'model::owl::tests::model',
      superTypes: ['model::owl::tests::model::Person'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::Organization',
    content: {
      _type: 'class',
      name: 'Organization',
      package: 'model::owl::tests::model',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'officialName',
          type: 'String',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::Person',
    content: {
      _type: 'class',
      name: 'Person',
      package: 'model::owl::tests::model',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'firstName',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'lastName',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'gender',
          type: 'model::owl::tests::model::GenderType',
        },
        {
          multiplicity: {
            lowerBound: 2,
          },
          name: 'nicknames',
          type: 'String',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::Professional',
    content: {
      _type: 'class',
      name: 'Professional',
      package: 'model::owl::tests::model',
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Account',
    content: {
      _type: 'class',
      name: 'Account',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'name',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'createDate',
          type: 'StrictDate',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'func',
                  function: 'in',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'name',
                    },
                    {
                      _type: 'collection',
                      multiplicity: {
                        lowerBound: 2,
                        upperBound: 2,
                      },
                      values: [
                        {
                          _type: 'string',
                          multiplicity: {
                            lowerBound: 1,
                            upperBound: 1,
                          },
                          values: ['Account 1'],
                        },
                        {
                          _type: 'string',
                          multiplicity: {
                            lowerBound: 1,
                            upperBound: 1,
                          },
                          values: ['Account 2'],
                        },
                      ],
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['A'],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['B'],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'accountCategory',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'func',
                  function: 'contains',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'name',
                    },
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['2'],
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'boolean',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: [true],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'boolean',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: [false],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'isTypeA',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'Boolean',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::AccountPnl',
    content: {
      _type: 'class',
      name: 'AccountPnl',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'pnl',
          type: 'Float',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Address',
    content: {
      _type: 'class',
      name: 'Address',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'name',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'street',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'comments',
          type: 'String',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'plus',
              parameters: [
                {
                  _type: 'collection',
                  multiplicity: {
                    lowerBound: 2,
                    upperBound: 2,
                  },
                  values: [
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['D:'],
                    },
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'name',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'description',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
      ],
      superTypes: ['model::pure::tests::model::simple::GeographicEntity'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Bridge',
    content: {
      _type: 'class',
      name: 'Bridge',
      package: 'model::pure::tests::model::simple',
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Department',
    content: {
      _type: 'class',
      name: 'Department',
      package: 'model::pure::tests::model::simple',
      superTypes: ['model::pure::tests::model::simple::Organization'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Division',
    content: {
      _type: 'class',
      name: 'Division',
      package: 'model::pure::tests::model::simple',
      superTypes: ['model::pure::tests::model::simple::Organization'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::EntityWithAddress',
    content: {
      _type: 'class',
      name: 'EntityWithAddress',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'address',
          type: 'model::pure::tests::model::simple::Address',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::EntityWithLocations',
    content: {
      _type: 'class',
      name: 'EntityWithLocations',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'locations',
          type: 'model::pure::tests::model::simple::Location',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'filter',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'locations',
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'exists',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'types',
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'func',
                              function: 'is',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'l',
                                    },
                                  ],
                                  property: 'type',
                                },
                                {
                                  _type: 'var',
                                  name: 'type',
                                },
                              ],
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'type',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  parameters: [
                    {
                      _type: 'var',
                      name: 'l',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'locationsByType',
          parameters: [
            {
              _type: 'var',
              class: 'model::pure::tests::model::simple::GeographicEntityType',
              multiplicity: {
                lowerBound: 0,
              },
              name: 'types',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Location',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Firm',
    content: {
      _type: 'class',
      name: 'Firm',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'legalName',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'nickName',
          type: 'String',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'times',
              parameters: [
                {
                  _type: 'collection',
                  multiplicity: {
                    lowerBound: 2,
                    upperBound: 2,
                  },
                  values: [
                    {
                      _type: 'func',
                      function: 'average',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'employees',
                            },
                          ],
                          property: 'age',
                        },
                      ],
                    },
                    {
                      _type: 'float',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: [2],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'averageEmployeesAge',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'Float',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'sum',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'employees',
                    },
                  ],
                  property: 'age',
                },
              ],
            },
          ],
          name: 'sumEmployeesAge',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'Integer',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'max',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'employees',
                    },
                  ],
                  property: 'age',
                },
              ],
            },
          ],
          name: 'maxEmployeesAge',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'Integer',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'plus',
              parameters: [
                {
                  _type: 'collection',
                  multiplicity: {
                    lowerBound: 3,
                    upperBound: 3,
                  },
                  values: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'legalName',
                    },
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: [','],
                    },
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'toOne',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'address',
                            },
                          ],
                        },
                      ],
                      property: 'name',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'nameAndAddress',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'func',
                  function: 'equal',
                  parameters: [
                    {
                      _type: 'func',
                      function: 'toOne',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'legalName',
                        },
                      ],
                    },
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['Firm X'],
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['Yes'],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['No'],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'isfirmX',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'func',
                  function: 'equal',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'legalName',
                    },
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['Firm X'],
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'plus',
                      parameters: [
                        {
                          _type: 'collection',
                          multiplicity: {
                            lowerBound: 2,
                            upperBound: 2,
                          },
                          values: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'legalName',
                            },
                            {
                              _type: 'string',
                              multiplicity: {
                                lowerBound: 1,
                                upperBound: 1,
                              },
                              values: [' , Top Secret'],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'plus',
                      parameters: [
                        {
                          _type: 'collection',
                          multiplicity: {
                            lowerBound: 3,
                            upperBound: 3,
                          },
                          values: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'legalName',
                            },
                            {
                              _type: 'string',
                              multiplicity: {
                                lowerBound: 1,
                                upperBound: 1,
                              },
                              values: [','],
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'func',
                                  function: 'toOne',
                                  parameters: [
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'address',
                                    },
                                  ],
                                },
                              ],
                              property: 'name',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'nameAndMaskedAddress',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'func',
                  function: 'filter',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'employees',
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'e',
                                },
                              ],
                              property: 'lastName',
                            },
                            {
                              _type: 'var',
                              name: 'lastName',
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'e',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'employeeByLastName',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'lastName',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
        {
          body: [
            {
              _type: 'property',
              parameters: [
                {
                  _type: 'func',
                  function: 'toOne',
                  parameters: [
                    {
                      _type: 'func',
                      function: 'filter',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'employees',
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'func',
                              function: 'equal',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'e',
                                    },
                                  ],
                                  property: 'lastName',
                                },
                                {
                                  _type: 'var',
                                  name: 'lastName',
                                },
                              ],
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'e',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              property: 'firstName',
            },
          ],
          name: 'employeeByLastNameFirstName',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'lastName',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'func',
                  function: 'filter',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'employees',
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'lastName',
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'e',
                                },
                              ],
                              property: 'lastName',
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'e',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'employeeByLastNameWhereVarIsFirstEqualArg',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'lastName',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'filter',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'employees',
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'lessThan',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'toOne',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'e',
                                },
                              ],
                              property: 'age',
                            },
                          ],
                        },
                        {
                          _type: 'var',
                          name: 'age',
                        },
                      ],
                    },
                  ],
                  parameters: [
                    {
                      _type: 'var',
                      name: 'e',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'employeesByAge',
          parameters: [
            {
              _type: 'var',
              class: 'Integer',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'age',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'filter',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'employees',
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'or',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'e',
                                    },
                                  ],
                                  property: 'address',
                                },
                              ],
                              property: 'name',
                            },
                            {
                              _type: 'var',
                              name: 'city',
                            },
                          ],
                        },
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'e',
                                    },
                                  ],
                                  property: 'manager',
                                },
                              ],
                              property: 'name',
                            },
                            {
                              _type: 'var',
                              name: 'managerName',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  parameters: [
                    {
                      _type: 'var',
                      name: 'e',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'employeesByCityOrManager',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'city',
            },
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'managerName',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'func',
                  function: 'filter',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'employees',
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'func',
                          function: 'and',
                          parameters: [
                            {
                              _type: 'func',
                              function: 'equal',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'e',
                                    },
                                  ],
                                  property: 'lastName',
                                },
                                {
                                  _type: 'var',
                                  name: 'name',
                                },
                              ],
                            },
                            {
                              _type: 'func',
                              function: 'or',
                              parameters: [
                                {
                                  _type: 'func',
                                  function: 'equal',
                                  parameters: [
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'property',
                                          parameters: [
                                            {
                                              _type: 'var',
                                              name: 'e',
                                            },
                                          ],
                                          property: 'address',
                                        },
                                      ],
                                      property: 'name',
                                    },
                                    {
                                      _type: 'var',
                                      name: 'city',
                                    },
                                  ],
                                },
                                {
                                  _type: 'func',
                                  function: 'equal',
                                  parameters: [
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'property',
                                          parameters: [
                                            {
                                              _type: 'var',
                                              name: 'e',
                                            },
                                          ],
                                          property: 'manager',
                                        },
                                      ],
                                      property: 'name',
                                    },
                                    {
                                      _type: 'var',
                                      name: 'managerName',
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'e',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'employeesByCityOrManagerAndLastName',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'name',
            },
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'city',
            },
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'managerName',
            },
          ],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'exists',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'employees',
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'lessThan',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'toOne',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'e',
                                },
                              ],
                              property: 'age',
                            },
                          ],
                        },
                        {
                          _type: 'var',
                          name: 'age',
                        },
                      ],
                    },
                  ],
                  parameters: [
                    {
                      _type: 'var',
                      name: 'e',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'hasEmployeeBelowAge',
          parameters: [
            {
              _type: 'var',
              class: 'Integer',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'age',
            },
          ],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'Boolean',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'first',
              parameters: [
                {
                  _type: 'func',
                  function: 'filter',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'employees',
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'e',
                                },
                              ],
                              property: 'name',
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'this',
                                    },
                                  ],
                                  property: 'address',
                                },
                              ],
                              property: 'name',
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'e',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'employeeWithFirmAddressName',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'first',
              parameters: [
                {
                  _type: 'func',
                  function: 'filter',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'employees',
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'e',
                                    },
                                  ],
                                  property: 'address',
                                },
                              ],
                              property: 'name',
                            },
                            {
                              _type: 'var',
                              name: 'name',
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'e',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'employeeWithAddressName',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'name',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'joinStrings',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'func',
                      function: 'sortBy',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'filter',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'employees',
                            },
                            {
                              _type: 'lambda',
                              body: [
                                {
                                  _type: 'func',
                                  function: 'equal',
                                  parameters: [
                                    {
                                      _type: 'func',
                                      function: 'trim',
                                      parameters: [
                                        {
                                          _type: 'func',
                                          function: 'toOne',
                                          parameters: [
                                            {
                                              _type: 'property',
                                              parameters: [
                                                {
                                                  _type: 'property',
                                                  parameters: [
                                                    {
                                                      _type: 'var',
                                                      name: 'e',
                                                    },
                                                  ],
                                                  property: 'address',
                                                },
                                              ],
                                              property: 'name',
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      _type: 'var',
                                      name: 'name',
                                    },
                                  ],
                                },
                              ],
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'e',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          _type: 'path',
                          path: [
                            {
                              _type: 'propertyPath',
                              parameters: [],
                              property: 'lastName',
                            },
                          ],
                          startType:
                            'model::pure::tests::model::simple::Person',
                        },
                      ],
                    },
                  ],
                  property: 'lastName',
                },
                {
                  _type: 'string',
                  multiplicity: {
                    lowerBound: 1,
                    upperBound: 1,
                  },
                  values: [''],
                },
              ],
            },
          ],
          name: 'employeesWithAddressNameSorted',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'name',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'filter',
              parameters: [
                {
                  _type: 'func',
                  function: 'map',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'employees',
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'e',
                            },
                          ],
                          property: 'address',
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'e',
                        },
                      ],
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'and',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'name',
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'this',
                                    },
                                  ],
                                  property: 'address',
                                },
                              ],
                              property: 'name',
                            },
                          ],
                        },
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'var',
                              name: 't',
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'x',
                                },
                              ],
                              property: 'type',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  parameters: [
                    {
                      _type: 'var',
                      name: 'x',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'employeeAddressesWithFirmAddressName',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'name',
            },
            {
              _type: 'var',
              class: 'model::pure::tests::model::simple::GeographicEntityType',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 't',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Address',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'in',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'legalName',
                },
                {
                  _type: 'collection',
                  multiplicity: {
                    lowerBound: 3,
                    upperBound: 3,
                  },
                  values: [
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['Firm X'],
                    },
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['Firm X & Co.'],
                    },
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['Firm X and Group'],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'isfirmXGroup',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'Boolean',
        },
      ],
      superTypes: ['model::pure::tests::model::simple::EntityWithAddress'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::FirmExtension',
    content: {
      _type: 'class',
      name: 'FirmExtension',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'establishedDate',
          type: 'Date',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'employeesExt',
          type: 'model::pure::tests::model::simple::PersonExtension',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'year',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'establishedDate',
                },
              ],
            },
          ],
          name: 'establishedYear',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'Integer',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'joinStrings',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'employeesExt',
                    },
                  ],
                  property: 'lastName',
                },
                {
                  _type: 'string',
                  multiplicity: {
                    lowerBound: 1,
                    upperBound: 1,
                  },
                  values: [','],
                },
              ],
            },
          ],
          name: 'allEmployeesLastName',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'String',
        },
      ],
      superTypes: ['model::pure::tests::model::simple::Firm'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::GeographicEntity',
    content: {
      _type: 'class',
      name: 'GeographicEntity',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'type',
          type: 'model::pure::tests::model::simple::GeographicEntityType',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Interaction',
    content: {
      _type: 'class',
      name: 'Interaction',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'id',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'source',
          type: 'model::pure::tests::model::simple::Person',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'target',
          type: 'model::pure::tests::model::simple::Person',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'active',
          type: 'Boolean',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'time',
          type: 'Integer',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'longestInteractionBetweenSourceAndTarget',
          type: 'Integer',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Location',
    content: {
      _type: 'class',
      name: 'Location',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'place',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'censusdate',
          type: 'Date',
        },
      ],
      superTypes: ['model::pure::tests::model::simple::GeographicEntity'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Order',
    content: {
      _type: 'class',
      name: 'Order',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'id',
          type: 'Integer',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'date',
          type: 'StrictDate',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'quantity',
          type: 'Float',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'settlementDateTime',
          type: 'DateTime',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'pnl',
          type: 'Float',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'pnlContact',
          type: 'model::pure::tests::model::simple::Person',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'zeroPnl',
          type: 'Boolean',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::OrderPnl',
    content: {
      _type: 'class',
      name: 'OrderPnl',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'pnl',
          type: 'Float',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'supportContactName',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'order',
          type: 'model::pure::tests::model::simple::Order',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Organization',
    content: {
      _type: 'class',
      name: 'Organization',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'name',
          type: 'String',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'func',
                  function: 'isEmpty',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'parent',
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'collection',
                      multiplicity: {
                        lowerBound: 0,
                        upperBound: 0,
                      },
                      values: [],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'concatenate',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'parent',
                        },
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'func',
                              function: 'toOne',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'this',
                                    },
                                  ],
                                  property: 'parent',
                                },
                              ],
                            },
                          ],
                          property: 'superOrganizations',
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'superOrganizations',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Organization',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'removeDuplicates',
              parameters: [
                {
                  _type: 'func',
                  function: 'concatenate',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'children',
                    },
                    {
                      _type: 'func',
                      function: 'map',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'children',
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'c',
                                },
                              ],
                              property: 'subOrganizations',
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'c',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'subOrganizations',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Organization',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'func',
                  function: 'filter',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'children',
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'c',
                                },
                              ],
                              property: 'name',
                            },
                            {
                              _type: 'var',
                              name: 'name',
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'c',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'child',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'name',
            },
          ],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Organization',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'removeDuplicates',
              parameters: [
                {
                  _type: 'func',
                  function: 'concatenate',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'members',
                    },
                    {
                      _type: 'func',
                      function: 'map',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'subOrganizations',
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'o',
                                },
                              ],
                              property: 'members',
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'o',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'allMembers',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Person',
    content: {
      _type: 'class',
      name: 'Person',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'firstName',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'lastName',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'otherNames',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'extraInformation',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'manager',
          type: 'model::pure::tests::model::simple::Person',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'age',
          type: 'Integer',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'nickName',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'activeEmployment',
          type: 'Boolean',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'plus',
              parameters: [
                {
                  _type: 'collection',
                  multiplicity: {
                    lowerBound: 3,
                    upperBound: 3,
                  },
                  values: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'firstName',
                    },
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: [' '],
                    },
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'lastName',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'name',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'plus',
              parameters: [
                {
                  _type: 'collection',
                  multiplicity: {
                    lowerBound: 5,
                    upperBound: 5,
                  },
                  values: [
                    {
                      _type: 'var',
                      name: 'title',
                    },
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: [' '],
                    },
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'firstName',
                    },
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: [' '],
                    },
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'lastName',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'nameWithTitle',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'title',
            },
          ],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'func',
                  function: 'isEmpty',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'prefix',
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'if',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'isEmpty',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'suffixes',
                            },
                          ],
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'func',
                              function: 'plus',
                              parameters: [
                                {
                                  _type: 'collection',
                                  multiplicity: {
                                    lowerBound: 3,
                                    upperBound: 3,
                                  },
                                  values: [
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'firstName',
                                    },
                                    {
                                      _type: 'string',
                                      multiplicity: {
                                        lowerBound: 1,
                                        upperBound: 1,
                                      },
                                      values: [' '],
                                    },
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'lastName',
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          parameters: [],
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'func',
                              function: 'plus',
                              parameters: [
                                {
                                  _type: 'collection',
                                  multiplicity: {
                                    lowerBound: 5,
                                    upperBound: 5,
                                  },
                                  values: [
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'firstName',
                                    },
                                    {
                                      _type: 'string',
                                      multiplicity: {
                                        lowerBound: 1,
                                        upperBound: 1,
                                      },
                                      values: [' '],
                                    },
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'lastName',
                                    },
                                    {
                                      _type: 'string',
                                      multiplicity: {
                                        lowerBound: 1,
                                        upperBound: 1,
                                      },
                                      values: [', '],
                                    },
                                    {
                                      _type: 'func',
                                      function: 'joinStrings',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'suffixes',
                                        },
                                        {
                                          _type: 'string',
                                          multiplicity: {
                                            lowerBound: 1,
                                            upperBound: 1,
                                          },
                                          values: [', '],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          parameters: [],
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'if',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'isEmpty',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'suffixes',
                            },
                          ],
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'func',
                              function: 'plus',
                              parameters: [
                                {
                                  _type: 'collection',
                                  multiplicity: {
                                    lowerBound: 5,
                                    upperBound: 5,
                                  },
                                  values: [
                                    {
                                      _type: 'func',
                                      function: 'toOne',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'prefix',
                                        },
                                      ],
                                    },
                                    {
                                      _type: 'string',
                                      multiplicity: {
                                        lowerBound: 1,
                                        upperBound: 1,
                                      },
                                      values: [' '],
                                    },
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'firstName',
                                    },
                                    {
                                      _type: 'string',
                                      multiplicity: {
                                        lowerBound: 1,
                                        upperBound: 1,
                                      },
                                      values: [' '],
                                    },
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'lastName',
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          parameters: [],
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'func',
                              function: 'plus',
                              parameters: [
                                {
                                  _type: 'collection',
                                  multiplicity: {
                                    lowerBound: 7,
                                    upperBound: 7,
                                  },
                                  values: [
                                    {
                                      _type: 'func',
                                      function: 'toOne',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'prefix',
                                        },
                                      ],
                                    },
                                    {
                                      _type: 'string',
                                      multiplicity: {
                                        lowerBound: 1,
                                        upperBound: 1,
                                      },
                                      values: [' '],
                                    },
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'firstName',
                                    },
                                    {
                                      _type: 'string',
                                      multiplicity: {
                                        lowerBound: 1,
                                        upperBound: 1,
                                      },
                                      values: [' '],
                                    },
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'lastName',
                                    },
                                    {
                                      _type: 'string',
                                      multiplicity: {
                                        lowerBound: 1,
                                        upperBound: 1,
                                      },
                                      values: [', '],
                                    },
                                    {
                                      _type: 'func',
                                      function: 'joinStrings',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'suffixes',
                                        },
                                        {
                                          _type: 'string',
                                          multiplicity: {
                                            lowerBound: 1,
                                            upperBound: 1,
                                          },
                                          values: [', '],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          parameters: [],
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'nameWithPrefixAndSuffix',
          parameters: [
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 0,
                upperBound: 1,
              },
              name: 'prefix',
            },
            {
              _type: 'var',
              class: 'String',
              multiplicity: {
                lowerBound: 0,
              },
              name: 'suffixes',
            },
          ],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'var',
                  name: 'lastNameFirst',
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'plus',
                      parameters: [
                        {
                          _type: 'collection',
                          multiplicity: {
                            lowerBound: 3,
                            upperBound: 3,
                          },
                          values: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'lastName',
                            },
                            {
                              _type: 'string',
                              multiplicity: {
                                lowerBound: 1,
                                upperBound: 1,
                              },
                              values: [', '],
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'firstName',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'plus',
                      parameters: [
                        {
                          _type: 'collection',
                          multiplicity: {
                            lowerBound: 3,
                            upperBound: 3,
                          },
                          values: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'firstName',
                            },
                            {
                              _type: 'string',
                              multiplicity: {
                                lowerBound: 1,
                                upperBound: 1,
                              },
                              values: [' '],
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'lastName',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'fullName',
          parameters: [
            {
              _type: 'var',
              class: 'Boolean',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'lastNameFirst',
            },
          ],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'personNameParameter',
                    },
                  ],
                  property: 'lastNameFirst',
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'plus',
                      parameters: [
                        {
                          _type: 'collection',
                          multiplicity: {
                            lowerBound: 5,
                            upperBound: 5,
                          },
                          values: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'personNameParameter',
                                    },
                                  ],
                                  property: 'nested',
                                },
                              ],
                              property: 'prefix',
                            },
                            {
                              _type: 'string',
                              multiplicity: {
                                lowerBound: 1,
                                upperBound: 1,
                              },
                              values: [' '],
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'lastName',
                            },
                            {
                              _type: 'string',
                              multiplicity: {
                                lowerBound: 1,
                                upperBound: 1,
                              },
                              values: [', '],
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'firstName',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'plus',
                      parameters: [
                        {
                          _type: 'collection',
                          multiplicity: {
                            lowerBound: 3,
                            upperBound: 3,
                          },
                          values: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'firstName',
                            },
                            {
                              _type: 'string',
                              multiplicity: {
                                lowerBound: 1,
                                upperBound: 1,
                              },
                              values: [' '],
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'lastName',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'parameterizedName',
          parameters: [
            {
              _type: 'var',
              class: 'model::pure::tests::model::simple::PersonNameParameter',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'personNameParameter',
            },
          ],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'removeDuplicates',
              parameters: [
                {
                  _type: 'func',
                  function: 'concatenate',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'organizations',
                    },
                    {
                      _type: 'func',
                      function: 'map',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'organizations',
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'o',
                                },
                              ],
                              property: 'superOrganizations',
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'o',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'allOrganizations',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Organization',
        },
        {
          body: [
            {
              _type: 'string',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              values: ['constant'],
            },
          ],
          name: 'constant',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'concatenate',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'address',
                },
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'firm',
                    },
                  ],
                  property: 'address',
                },
              ],
            },
          ],
          name: 'addresses',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Address',
        },
      ],
      superTypes: [
        'model::pure::tests::model::simple::EntityWithAddress',
        'model::pure::tests::model::simple::EntityWithLocations',
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::PersonExtension',
    content: {
      _type: 'class',
      name: 'PersonExtension',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'birthdate',
          type: 'Date',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'year',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'birthdate',
                },
              ],
            },
          ],
          name: 'birthYear',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'Integer',
        },
      ],
      superTypes: ['model::pure::tests::model::simple::Person'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::PersonNameParameter',
    content: {
      _type: 'class',
      name: 'PersonNameParameter',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'lastNameFirst',
          type: 'Boolean',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'nested',
          type: 'model::pure::tests::model::simple::PersonNameParameterNested',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::PersonNameParameterNested',
    content: {
      _type: 'class',
      name: 'PersonNameParameterNested',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'prefix',
          type: 'String',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::PlaceOfInterest',
    content: {
      _type: 'class',
      name: 'PlaceOfInterest',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'name',
          type: 'String',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Product',
    content: {
      _type: 'class',
      name: 'Product',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'name',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'classification',
          type: 'model::pure::tests::model::simple::ProductClassification',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'property',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'enum',
                          fullPath:
                            'model::pure::tests::model::simple::ProductSynonymType',
                        },
                      ],
                      property: 'CUSIP',
                    },
                  ],
                  property: 'synonymByType',
                },
              ],
              property: 'name',
            },
          ],
          name: 'cusip',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'property',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'enum',
                          fullPath:
                            'model::pure::tests::model::simple::ProductSynonymType',
                        },
                      ],
                      property: 'ISIN',
                    },
                  ],
                  property: 'synonymByType',
                },
              ],
              property: 'name',
            },
          ],
          name: 'isin',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'property',
              parameters: [
                {
                  _type: 'var',
                  name: 'this',
                },
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'enum',
                      fullPath:
                        'model::pure::tests::model::simple::ProductSynonymType',
                    },
                  ],
                  property: 'CUSIP',
                },
              ],
              property: 'synonymByType',
            },
          ],
          name: 'cusipSynonym',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Synonym',
        },
        {
          body: [
            {
              _type: 'property',
              parameters: [
                {
                  _type: 'var',
                  name: 'this',
                },
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'enum',
                      fullPath:
                        'model::pure::tests::model::simple::ProductSynonymType',
                    },
                  ],
                  property: 'ISIN',
                },
              ],
              property: 'synonymByType',
            },
          ],
          name: 'isinSynonym',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Synonym',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::ProductClassification',
    content: {
      _type: 'class',
      name: 'ProductClassification',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'type',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'description',
          type: 'String',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Synonym',
    content: {
      _type: 'class',
      name: 'Synonym',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'typeAsString',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'type',
          type: 'model::pure::tests::model::simple::ProductSynonymType',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'name',
          type: 'String',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Team',
    content: {
      _type: 'class',
      name: 'Team',
      package: 'model::pure::tests::model::simple',
      superTypes: ['model::pure::tests::model::simple::Organization'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::Trade',
    content: {
      _type: 'class',
      name: 'Trade',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'id',
          type: 'Integer',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'date',
          type: 'StrictDate',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'quantity',
          type: 'Float',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'product',
          type: 'model::pure::tests::model::simple::Product',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'settlementDateTime',
          type: 'DateTime',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'latestEventDate',
          type: 'StrictDate',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'events',
          type: 'model::pure::tests::model::simple::TradeEvent',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'func',
                  function: 'isNotEmpty',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'product',
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'if',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'isNotEmpty',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'this',
                                    },
                                  ],
                                  property: 'product',
                                },
                              ],
                              property: 'cusip',
                            },
                          ],
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'func',
                              function: 'toOne',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'product',
                                    },
                                  ],
                                  property: 'cusip',
                                },
                              ],
                            },
                          ],
                          parameters: [],
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'func',
                                  function: 'toOne',
                                  parameters: [
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'product',
                                    },
                                  ],
                                },
                              ],
                              property: 'name',
                            },
                          ],
                          parameters: [],
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['Unknown'],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'productIdentifier',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'filter',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'product',
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'and',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'p',
                                },
                              ],
                              property: 'name',
                            },
                            {
                              _type: 'string',
                              multiplicity: {
                                lowerBound: 1,
                                upperBound: 1,
                              },
                              values: [' test'],
                            },
                          ],
                        },
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'date',
                            },
                            {
                              _type: 'strictDate',
                              multiplicity: {
                                lowerBound: 1,
                                upperBound: 1,
                              },
                              values: ['2020-01-01'],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  parameters: [
                    {
                      _type: 'var',
                      name: 'p',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'filterProductByNameAndTradeDate',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Product',
        },
        {
          body: [
            {
              _type: 'property',
              parameters: [
                {
                  _type: 'func',
                  function: 'toOne',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'filter',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'product',
                            },
                            {
                              _type: 'lambda',
                              body: [
                                {
                                  _type: 'func',
                                  function: 'equal',
                                  parameters: [
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'p',
                                        },
                                      ],
                                      property: 'name',
                                    },
                                    {
                                      _type: 'string',
                                      multiplicity: {
                                        lowerBound: 1,
                                        upperBound: 1,
                                      },
                                      values: [' test'],
                                    },
                                  ],
                                },
                              ],
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'p',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          _type: 'strictDate',
                          multiplicity: {
                            lowerBound: 1,
                            upperBound: 1,
                          },
                          values: ['2020-01-01'],
                        },
                      ],
                      property: 'classification',
                    },
                  ],
                },
              ],
              property: 'type',
            },
          ],
          name: 'classificationType',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'func',
                  function: 'isEmpty',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'product',
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['Unknown'],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'toOne',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'product',
                            },
                          ],
                        },
                      ],
                      property: 'name',
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'productDescription',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'func',
                  function: 'isNotEmpty',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'account',
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'toOne',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'account',
                            },
                          ],
                        },
                      ],
                      property: 'name',
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'string',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: ['Unknown'],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'accountDescription',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'if',
              parameters: [
                {
                  _type: 'func',
                  function: 'isNotEmpty',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'product',
                    },
                  ],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'if',
                      parameters: [
                        {
                          _type: 'func',
                          function: 'isNotEmpty',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'this',
                                    },
                                  ],
                                  property: 'product',
                                },
                              ],
                              property: 'cusip',
                            },
                          ],
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'this',
                                    },
                                  ],
                                  property: 'product',
                                },
                              ],
                              property: 'cusip',
                            },
                          ],
                          parameters: [],
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'this',
                                    },
                                  ],
                                  property: 'product',
                                },
                              ],
                              property: 'name',
                            },
                          ],
                          parameters: [],
                        },
                      ],
                    },
                  ],
                  parameters: [],
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'collection',
                      multiplicity: {
                        lowerBound: 0,
                        upperBound: 0,
                      },
                      values: [],
                    },
                  ],
                  parameters: [],
                },
              ],
            },
          ],
          name: 'productIdentifierWithNull',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'minus',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'quantity',
                },
              ],
            },
          ],
          name: 'customerQuantity',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'Float',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'dateDiff',
              parameters: [
                {
                  _type: 'func',
                  function: 'toOne',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'latestEventDate',
                    },
                  ],
                },
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'date',
                },
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'enum',
                      fullPath: 'DurationUnit',
                    },
                  ],
                  property: 'DAYS',
                },
              ],
            },
          ],
          name: 'daysToLastEvent',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'Integer',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'func',
                  function: 'filter',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'events',
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'e',
                                },
                              ],
                              property: 'date',
                            },
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'latestEventDate',
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 'e',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'latestEvent',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::TradeEvent',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'filter',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'events',
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'equal',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'e',
                            },
                          ],
                          property: 'date',
                        },
                        {
                          _type: 'var',
                          name: 'date',
                        },
                      ],
                    },
                  ],
                  parameters: [
                    {
                      _type: 'var',
                      name: 'e',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'eventsByDate',
          parameters: [
            {
              _type: 'var',
              class: 'Date',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'date',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::TradeEvent',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                        {
                          _type: 'func',
                          function: 'toOne',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'this',
                                },
                              ],
                              property: 'date',
                            },
                          ],
                        },
                      ],
                      property: 'eventsByDate',
                    },
                  ],
                  property: 'eventType',
                },
              ],
            },
          ],
          name: 'tradeDateEventType',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                    {
                      _type: 'func',
                      function: 'toOne',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'date',
                        },
                      ],
                    },
                  ],
                  property: 'eventsByDate',
                },
              ],
            },
          ],
          name: 'tradeDateEvent',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::TradeEvent',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'func',
                      function: 'filter',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'events',
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'func',
                              function: 'equal',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'e',
                                    },
                                  ],
                                  property: 'date',
                                },
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'this',
                                    },
                                  ],
                                  property: 'date',
                                },
                              ],
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'e',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  property: 'eventType',
                },
              ],
            },
          ],
          name: 'tradeDateEventTypeInlined',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'String',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'date',
                        },
                      ],
                      property: 'eventsByDate',
                    },
                  ],
                  property: 'initiator',
                },
              ],
            },
          ],
          name: 'initiator',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'func',
                      function: 'filter',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'events',
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'func',
                              function: 'equal',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'e',
                                    },
                                  ],
                                  property: 'date',
                                },
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'this',
                                    },
                                  ],
                                  property: 'date',
                                },
                              ],
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'e',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  property: 'initiator',
                },
              ],
            },
          ],
          name: 'initiatorInlined',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'toOneMany',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'func',
                      function: 'filter',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 'this',
                            },
                          ],
                          property: 'events',
                        },
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'func',
                              function: 'equal',
                              parameters: [
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'var',
                                      name: 'e',
                                    },
                                  ],
                                  property: 'eventType',
                                },
                                {
                                  _type: 'property',
                                  parameters: [
                                    {
                                      _type: 'property',
                                      parameters: [
                                        {
                                          _type: 'var',
                                          name: 'this',
                                        },
                                      ],
                                      property: 'product',
                                    },
                                  ],
                                  property: 'name',
                                },
                              ],
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'e',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  property: 'initiator',
                },
              ],
            },
          ],
          name: 'initiatorInlinedByProductName',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Person',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::pure::tests::model::simple::TradeEvent',
    content: {
      _type: 'class',
      name: 'TradeEvent',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'eventType',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'date',
          type: 'StrictDate',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'initiator',
          type: 'model::pure::tests::model::simple::Person',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'traderAddress',
          type: 'String',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::relational::tests::mapping::subType::CreditRating',
    content: {
      _type: 'class',
      name: 'CreditRating',
      package: 'model::relational::tests::mapping::subType',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'description',
          type: 'String',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::relational::tests::mapping::subType::MyProduct',
    content: {
      _type: 'class',
      name: 'MyProduct',
      package: 'model::relational::tests::mapping::subType',
      superTypes: ['model::pure::tests::model::simple::Product'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::relational::tests::mapping::union::extend::Address',
    content: {
      _type: 'class',
      name: 'Address',
      package: 'model::relational::tests::mapping::union::extend',
      superTypes: ['model::pure::tests::model::simple::Address'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::relational::tests::mapping::union::extend::Firm',
    content: {
      _type: 'class',
      name: 'Firm',
      package: 'model::relational::tests::mapping::union::extend',
      superTypes: ['model::pure::tests::model::simple::Firm'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::relational::tests::mapping::union::extend::Person',
    content: {
      _type: 'class',
      name: 'Person',
      package: 'model::relational::tests::mapping::union::extend',
      superTypes: ['model::pure::tests::model::simple::Person'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'model::owl::tests::model::Business_Employees',
    content: {
      _type: 'association',
      name: 'Business_Employees',
      package: 'model::owl::tests::model',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'firm',
          type: 'model::owl::tests::model::Business',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'employs',
          type: 'model::owl::tests::model::Person',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::owl::tests::model::OrgStructures',
    content: {
      _type: 'association',
      name: 'OrgStructures',
      package: 'model::owl::tests::model',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'parentOrg',
          type: 'model::owl::tests::model::Organization',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'subOrgs',
          type: 'model::owl::tests::model::Organization',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::owl::tests::model::Parent_Children',
    content: {
      _type: 'association',
      name: 'Parent_Children',
      package: 'model::owl::tests::model',
      properties: [
        {
          multiplicity: {
            lowerBound: 2,
            upperBound: 2,
          },
          name: 'parents',
          type: 'model::owl::tests::model::Person',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'children',
          type: 'model::owl::tests::model::Person',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::owl::tests::model::Person_Accounts',
    content: {
      _type: 'association',
      name: 'Person_Accounts',
      package: 'model::owl::tests::model',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'acctOwner',
          type: 'model::owl::tests::model::Person',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'accounts',
          type: 'model::pure::tests::model::simple::Account',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::Account_AccountPnl',
    content: {
      _type: 'association',
      name: 'Account_AccountPnl',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'account',
          type: 'model::pure::tests::model::simple::Account',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'accountPnl',
          type: 'model::pure::tests::model::simple::AccountPnl',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::AddressLocation',
    content: {
      _type: 'association',
      name: 'AddressLocation',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'location',
          type: 'model::pure::tests::model::simple::Location',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'addresses',
          type: 'model::pure::tests::model::simple::Address',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::BridgeAsso1',
    content: {
      _type: 'association',
      name: 'BridgeAsso1',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'bridge',
          type: 'model::pure::tests::model::simple::Bridge',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'employees',
          type: 'model::pure::tests::model::simple::Person',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::BridgeAsso2',
    content: {
      _type: 'association',
      name: 'BridgeAsso2',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'bridge',
          type: 'model::pure::tests::model::simple::Bridge',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'firm',
          type: 'model::pure::tests::model::simple::Firm',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::Employment',
    content: {
      _type: 'association',
      name: 'Employment',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'firm',
          type: 'model::pure::tests::model::simple::Firm',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'employees',
          type: 'model::pure::tests::model::simple::Person',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::FirmCEO',
    content: {
      _type: 'association',
      name: 'FirmCEO',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'ceoFirm',
          type: 'model::pure::tests::model::simple::Firm',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'ceo',
          type: 'model::pure::tests::model::simple::Person',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::FirmOrganizations',
    content: {
      _type: 'association',
      name: 'FirmOrganizations',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'firm',
          type: 'model::pure::tests::model::simple::Firm',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'organizations',
          type: 'model::pure::tests::model::simple::Organization',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::Membership',
    content: {
      _type: 'association',
      name: 'Membership',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'organizations',
          type: 'model::pure::tests::model::simple::Organization',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'members',
          type: 'model::pure::tests::model::simple::Person',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::PlacesOfInterest',
    content: {
      _type: 'association',
      name: 'PlacesOfInterest',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'location',
          type: 'model::pure::tests::model::simple::Location',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'placeOfInterest',
          type: 'model::pure::tests::model::simple::PlaceOfInterest',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::ProdSynonym',
    content: {
      _type: 'association',
      name: 'ProdSynonym',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'synonyms',
          type: 'model::pure::tests::model::simple::Synonym',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'product',
          type: 'model::pure::tests::model::simple::Product',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'toOne',
              parameters: [
                {
                  _type: 'func',
                  function: 'filter',
                  parameters: [
                    {
                      _type: 'property',
                      parameters: [
                        {
                          _type: 'var',
                          name: 'this',
                        },
                      ],
                      property: 'synonyms',
                    },
                    {
                      _type: 'lambda',
                      body: [
                        {
                          _type: 'func',
                          function: 'equal',
                          parameters: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 's',
                                },
                              ],
                              property: 'type',
                            },
                            {
                              _type: 'var',
                              name: 'type',
                            },
                          ],
                        },
                      ],
                      parameters: [
                        {
                          _type: 'var',
                          name: 's',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          name: 'synonymByType',
          parameters: [
            {
              _type: 'var',
              class: 'model::pure::tests::model::simple::ProductSynonymType',
              multiplicity: {
                lowerBound: 1,
                upperBound: 1,
              },
              name: 'type',
            },
          ],
          returnMultiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          returnType: 'model::pure::tests::model::simple::Synonym',
        },
        {
          body: [
            {
              _type: 'func',
              function: 'filter',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'synonyms',
                },
                {
                  _type: 'lambda',
                  body: [
                    {
                      _type: 'func',
                      function: 'in',
                      parameters: [
                        {
                          _type: 'property',
                          parameters: [
                            {
                              _type: 'var',
                              name: 's',
                            },
                          ],
                          property: 'type',
                        },
                        {
                          _type: 'var',
                          name: 'types',
                        },
                      ],
                    },
                  ],
                  parameters: [
                    {
                      _type: 'var',
                      name: 's',
                    },
                  ],
                },
              ],
            },
          ],
          name: 'synonymsByTypes',
          parameters: [
            {
              _type: 'var',
              class: 'model::pure::tests::model::simple::ProductSynonymType',
              multiplicity: {
                lowerBound: 0,
              },
              name: 'types',
            },
          ],
          returnMultiplicity: {
            lowerBound: 0,
          },
          returnType: 'model::pure::tests::model::simple::Synonym',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::SubOrganization',
    content: {
      _type: 'association',
      name: 'SubOrganization',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'parent',
          type: 'model::pure::tests::model::simple::Organization',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'children',
          type: 'model::pure::tests::model::simple::Organization',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::Trade_Accounts',
    content: {
      _type: 'association',
      name: 'Trade_Accounts',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'account',
          type: 'model::pure::tests::model::simple::Account',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'trades',
          type: 'model::pure::tests::model::simple::Trade',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::pure::tests::model::simple::Trade_Orders',
    content: {
      _type: 'association',
      name: 'Trade_Orders',
      package: 'model::pure::tests::model::simple',
      properties: [
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'account',
          type: 'model::pure::tests::model::simple::Account',
        },
        {
          multiplicity: {
            lowerBound: 0,
          },
          name: 'orders',
          type: 'model::pure::tests::model::simple::Order',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::relational::tests::mapping::subType::ProductRating',
    content: {
      _type: 'association',
      name: 'ProductRating',
      package: 'model::relational::tests::mapping::subType',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'product',
          type: 'model::relational::tests::mapping::subType::MyProduct',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'rating',
          type: 'model::relational::tests::mapping::subType::CreditRating',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::relationship::Association',
  },
  {
    path: 'model::relational::tests::db',
    content: {
      _type: 'relational',
      filters: [
        {
          _type: 'filter',
          name: 'PositiveInteractionTimeFilter',
          operation: {
            _type: 'dynaFunc',
            funcName: 'greaterThan',
            parameters: [
              {
                _type: 'column',
                column: 'time',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'interactionTable',
                },
                tableAlias: 'interactionTable',
              },
              {
                _type: 'literal',
                value: 0,
              },
            ],
          },
        },
        {
          _type: 'filter',
          name: 'ProductSynonymFilter',
          operation: {
            _type: 'dynaFunc',
            funcName: 'notEqual',
            parameters: [
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'productSchema',
                  table: 'synonymTable',
                },
                tableAlias: 'synonymTable',
              },
              {
                _type: 'literal',
                value: 1,
              },
            ],
          },
        },
        {
          _type: 'filter',
          name: 'NonNegativePnlFilter',
          operation: {
            _type: 'dynaFunc',
            funcName: 'greaterThan',
            parameters: [
              {
                _type: 'column',
                column: 'pnl',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderPnlTable',
                },
                tableAlias: 'orderPnlTable',
              },
              {
                _type: 'literal',
                value: 0,
              },
            ],
          },
        },
        {
          _type: 'filter',
          name: 'LessThanEqualZeroPnlFilter',
          operation: {
            _type: 'dynaFunc',
            funcName: 'lessThanEqual',
            parameters: [
              {
                _type: 'column',
                column: 'pnl',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderPnlTable',
                },
                tableAlias: 'orderPnlTable',
              },
              {
                _type: 'literal',
                value: 0,
              },
            ],
          },
        },
      ],
      includedStores: ['model::relational::tests::dbInc'],
      joins: [
        {
          name: 'Product_Synonym',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'PRODID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'productSchema',
                  table: 'synonymTable',
                },
                tableAlias: 'synonymTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'productSchema',
                  table: 'productTable',
                },
                tableAlias: 'productTable',
              },
            ],
          },
        },
        {
          name: 'Trade_Product',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'prodId',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeTable',
                },
                tableAlias: 'tradeTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'productSchema',
                  table: 'productTable',
                },
                tableAlias: 'productTable',
              },
            ],
          },
        },
        {
          name: 'Trade_Account',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'accountID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeTable',
                },
                tableAlias: 'tradeTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'accountTable',
                },
                tableAlias: 'accountTable',
              },
            ],
          },
        },
        {
          name: 'Interaction_Source',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'sourceId',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'interactionTable',
                },
                tableAlias: 'interactionTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
            ],
          },
        },
        {
          name: 'Interaction_Target',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'targetId',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'interactionTable',
                },
                tableAlias: 'interactionTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
            ],
          },
        },
        {
          name: 'InteractionTable_InteractionViewMaxTime',
          operation: {
            _type: 'dynaFunc',
            funcName: 'and',
            parameters: [
              {
                _type: 'dynaFunc',
                funcName: 'equal',
                parameters: [
                  {
                    _type: 'column',
                    column: 'sourceId',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'interactionTable',
                    },
                    tableAlias: 'interactionTable',
                  },
                  {
                    _type: 'column',
                    column: 'sourceId',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'interactionViewMaxTime',
                    },
                    tableAlias: 'interactionViewMaxTime',
                  },
                ],
              },
              {
                _type: 'dynaFunc',
                funcName: 'equal',
                parameters: [
                  {
                    _type: 'column',
                    column: 'targetId',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'interactionTable',
                    },
                    tableAlias: 'interactionTable',
                  },
                  {
                    _type: 'column',
                    column: 'targetId',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'interactionViewMaxTime',
                    },
                    tableAlias: 'interactionViewMaxTime',
                  },
                ],
              },
            ],
          },
        },
        {
          name: 'Trade_TradeEvent',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeTable',
                },
                tableAlias: 'tradeTable',
              },
              {
                _type: 'column',
                column: 'trade_id',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeEventTable',
                },
                tableAlias: 'tradeEventTable',
              },
            ],
          },
        },
        {
          name: 'Trade_TradeEventViewMaxTradeEventDate',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeTable',
                },
                tableAlias: 'tradeTable',
              },
              {
                _type: 'column',
                column: 'trade_id',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeEventViewMaxTradeEventDate',
                },
                tableAlias: 'tradeEventViewMaxTradeEventDate',
              },
            ],
          },
        },
        {
          name: 'TradeEvent_Person',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'person_id',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeEventTable',
                },
                tableAlias: 'tradeEventTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
            ],
          },
        },
        {
          name: 'Interaction_Interaction',
          operation: {
            _type: 'dynaFunc',
            funcName: 'and',
            parameters: [
              {
                _type: 'dynaFunc',
                funcName: 'equal',
                parameters: [
                  {
                    _type: 'column',
                    column: 'sourceId',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'interactionTable',
                    },
                    tableAlias: 'interactionTable',
                  },
                  {
                    _type: 'column',
                    column: 'sourceId',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: '{target}',
                    },
                    tableAlias: '{target}',
                  },
                ],
              },
              {
                _type: 'dynaFunc',
                funcName: 'equal',
                parameters: [
                  {
                    _type: 'column',
                    column: 'targetId',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'interactionTable',
                    },
                    tableAlias: 'interactionTable',
                  },
                  {
                    _type: 'column',
                    column: 'targetId',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: '{target}',
                    },
                    tableAlias: '{target}',
                  },
                ],
              },
            ],
          },
          target: 't_interactionTable',
        },
        {
          name: 'Order_SalesPerson',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'accountID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
              {
                _type: 'column',
                column: 'ACCOUNT_ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'salesPersonTable',
                },
                tableAlias: 'salesPersonTable',
              },
            ],
          },
        },
        {
          name: 'Order_Account',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'accountID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'accountTable',
                },
                tableAlias: 'accountTable',
              },
            ],
          },
        },
        {
          name: 'OrderPnlView_Order',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ORDER_ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderPnlView',
                },
                tableAlias: 'orderPnlView',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
            ],
          },
        },
        {
          name: 'OrderPnlViewOnView_Order',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ORDER_ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderPnlViewOnView',
                },
                tableAlias: 'orderPnlViewOnView',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
            ],
          },
        },
        {
          name: 'OrderNetativePnlView_Order',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ORDER_ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderNegativePnlView',
                },
                tableAlias: 'orderNegativePnlView',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
            ],
          },
        },
        {
          name: 'OrderNegativePnlViewOnView_Order',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ORDER_ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderNegativePnlViewOnView',
                },
                tableAlias: 'orderNegativePnlViewOnView',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
            ],
          },
        },
        {
          name: 'OrderPnlView_Person',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'supportContactId',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderPnlView',
                },
                tableAlias: 'orderPnlView',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
            ],
          },
        },
        {
          name: 'SalesPerson_PersonView',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'PERSON_ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'salesPersonTable',
                },
                tableAlias: 'salesPersonTable',
              },
              {
                _type: 'column',
                column: 'PERSON_ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'PersonFirmView',
                },
                tableAlias: 'PersonFirmView',
              },
            ],
          },
        },
        {
          name: 'OrderPnlTable_Order',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ORDER_ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderPnlTable',
                },
                tableAlias: 'orderPnlTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
            ],
          },
        },
        {
          name: 'AccountPnlView_Account',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'accountId',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'accountOrderPnlView',
                },
                tableAlias: 'accountOrderPnlView',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'accountTable',
                },
                tableAlias: 'accountTable',
              },
            ],
          },
        },
        {
          name: 'Person_OtherNames',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
              {
                _type: 'column',
                column: 'PERSON_ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'otherNamesTable',
                },
                tableAlias: 'otherNamesTable',
              },
            ],
          },
        },
      ],
      name: 'db',
      package: 'model::relational::tests',
      schemas: [
        {
          name: 'productSchema',
          tables: [
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'PRODID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'TYPE',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'NAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
              ],
              name: 'synonymTable',
              primaryKey: ['ID'],
            },
          ],
          views: [],
        },
        {
          name: 'default',
          tables: [
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'sourceId',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'targetId',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'time',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'active',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 1,
                  },
                },
              ],
              name: 'interactionTable',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'prodId',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'accountID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'quantity',
                  nullable: true,
                  type: {
                    _type: 'Float',
                  },
                },
                {
                  name: 'tradeDate',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
                {
                  name: 'settlementDateTime',
                  nullable: true,
                  type: {
                    _type: 'Timestamp',
                  },
                },
              ],
              name: 'tradeTable',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'name',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'createDate',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
              ],
              name: 'accountTable',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'EVENT_ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'trade_id',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'eventType',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 10,
                  },
                },
                {
                  name: 'eventDate',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
                {
                  name: 'person_id',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
              ],
              name: 'tradeEventTable',
              primaryKey: ['EVENT_ID'],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'prodId',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'accountID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'quantity',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'orderDate',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
                {
                  name: 'settlementDateTime',
                  nullable: true,
                  type: {
                    _type: 'Timestamp',
                  },
                },
              ],
              name: 'orderTable',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'ORDER_ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'pnl',
                  nullable: true,
                  type: {
                    _type: 'Float',
                  },
                },
                {
                  name: 'from_z',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
                {
                  name: 'thru_z',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
              ],
              name: 'orderPnlTable',
              primaryKey: ['ORDER_ID'],
            },
            {
              columns: [
                {
                  name: 'PERSON_ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'ACCOUNT_ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'NAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'from_z',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
                {
                  name: 'thru_z',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
              ],
              name: 'salesPersonTable',
              primaryKey: ['PERSON_ID', 'ACCOUNT_ID'],
            },
            {
              columns: [
                {
                  name: 'PERSON_ID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'OTHER_NAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
              ],
              name: 'otherNamesTable',
              primaryKey: [],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: '"FIRST NAME"',
                  nullable: false,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: '"LAST NAME"',
                  nullable: false,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
              ],
              name: 'tableWithQuotedColumns',
              primaryKey: ['ID', '"FIRST NAME"', '"LAST NAME"'],
            },
          ],
          views: [
            {
              columnMappings: [
                {
                  name: 'sourceId',
                  operation: {
                    _type: 'column',
                    column: 'sourceId',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'interactionTable',
                    },
                    tableAlias: 'interactionTable',
                  },
                },
                {
                  name: 'targetId',
                  operation: {
                    _type: 'column',
                    column: 'targetId',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'interactionTable',
                    },
                    tableAlias: 'interactionTable',
                  },
                },
                {
                  name: 'maxTime',
                  operation: {
                    _type: 'dynaFunc',
                    funcName: 'max',
                    parameters: [
                      {
                        _type: 'column',
                        column: 'time',
                        table: {
                          _type: 'Table',
                          database: 'model::relational::tests::db',
                          schema: 'default',
                          table: 'interactionTable',
                        },
                        tableAlias: 'interactionTable',
                      },
                    ],
                  },
                },
              ],
              distinct: false,
              groupBy: [
                {
                  _type: 'column',
                  column: 'sourceId',
                  table: {
                    _type: 'Table',
                    database: 'model::relational::tests::db',
                    schema: 'default',
                    table: 'interactionTable',
                  },
                  tableAlias: 'interactionTable',
                },
                {
                  _type: 'column',
                  column: 'targetId',
                  table: {
                    _type: 'Table',
                    database: 'model::relational::tests::db',
                    schema: 'default',
                    table: 'interactionTable',
                  },
                  tableAlias: 'interactionTable',
                },
              ],
              name: 'interactionViewMaxTime',
              primaryKey: [],
            },
            {
              columnMappings: [
                {
                  name: 'trade_id',
                  operation: {
                    _type: 'column',
                    column: 'trade_id',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'tradeEventTable',
                    },
                    tableAlias: 'tradeEventTable',
                  },
                },
                {
                  name: 'maxTradeEventDate',
                  operation: {
                    _type: 'dynaFunc',
                    funcName: 'max',
                    parameters: [
                      {
                        _type: 'column',
                        column: 'eventDate',
                        table: {
                          _type: 'Table',
                          database: 'model::relational::tests::db',
                          schema: 'default',
                          table: 'tradeEventTable',
                        },
                        tableAlias: 'tradeEventTable',
                      },
                    ],
                  },
                },
              ],
              distinct: false,
              groupBy: [
                {
                  _type: 'column',
                  column: 'trade_id',
                  table: {
                    _type: 'Table',
                    database: 'model::relational::tests::db',
                    schema: 'default',
                    table: 'tradeEventTable',
                  },
                  tableAlias: 'tradeEventTable',
                },
              ],
              name: 'tradeEventViewMaxTradeEventDate',
              primaryKey: [],
            },
            {
              columnMappings: [
                {
                  name: 'ORDER_ID',
                  operation: {
                    _type: 'column',
                    column: 'ORDER_ID',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'orderPnlTable',
                    },
                    tableAlias: 'orderPnlTable',
                  },
                },
                {
                  name: 'pnl',
                  operation: {
                    _type: 'column',
                    column: 'pnl',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'orderPnlTable',
                    },
                    tableAlias: 'orderPnlTable',
                  },
                },
                {
                  name: 'accountId',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::db',
                        name: 'OrderPnlTable_Order',
                      },
                      {
                        db: 'model::relational::tests::db',
                        name: 'Order_Account',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'ID',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::db',
                        schema: 'default',
                        table: 'accountTable',
                      },
                      tableAlias: 'accountTable',
                    },
                  },
                },
                {
                  name: 'supportContact',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::db',
                        name: 'OrderPnlTable_Order',
                      },
                      {
                        db: 'model::relational::tests::db',
                        name: 'Order_SalesPerson',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'NAME',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::db',
                        schema: 'default',
                        table: 'salesPersonTable',
                      },
                      tableAlias: 'salesPersonTable',
                    },
                  },
                },
                {
                  name: 'supportContactId',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::db',
                        name: 'OrderPnlTable_Order',
                      },
                      {
                        db: 'model::relational::tests::db',
                        name: 'Order_SalesPerson',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'PERSON_ID',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::db',
                        schema: 'default',
                        table: 'salesPersonTable',
                      },
                      tableAlias: 'salesPersonTable',
                    },
                  },
                },
              ],
              distinct: true,
              groupBy: [],
              name: 'orderPnlView',
              primaryKey: ['ORDER_ID'],
            },
            {
              columnMappings: [
                {
                  name: 'ORDER_ID',
                  operation: {
                    _type: 'column',
                    column: 'ORDER_ID',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'orderPnlView',
                    },
                    tableAlias: 'orderPnlView',
                  },
                },
                {
                  name: 'pnl',
                  operation: {
                    _type: 'column',
                    column: 'pnl',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'orderPnlView',
                    },
                    tableAlias: 'orderPnlView',
                  },
                },
              ],
              distinct: false,
              groupBy: [],
              name: 'orderPnlViewOnView',
              primaryKey: ['ORDER_ID'],
            },
            {
              columnMappings: [
                {
                  name: 'ORDER_ID',
                  operation: {
                    _type: 'column',
                    column: 'ORDER_ID',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'orderPnlTable',
                    },
                    tableAlias: 'orderPnlTable',
                  },
                },
                {
                  name: 'pnl',
                  operation: {
                    _type: 'column',
                    column: 'pnl',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'orderPnlTable',
                    },
                    tableAlias: 'orderPnlTable',
                  },
                },
                {
                  name: 'accountId',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::db',
                        name: 'OrderPnlTable_Order',
                      },
                      {
                        db: 'model::relational::tests::db',
                        name: 'Order_Account',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'ID',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::db',
                        schema: 'default',
                        table: 'accountTable',
                      },
                      tableAlias: 'accountTable',
                    },
                  },
                },
                {
                  name: 'supportContact',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::db',
                        name: 'OrderPnlTable_Order',
                      },
                      {
                        db: 'model::relational::tests::db',
                        name: 'Order_SalesPerson',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'NAME',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::db',
                        schema: 'default',
                        table: 'salesPersonTable',
                      },
                      tableAlias: 'salesPersonTable',
                    },
                  },
                },
                {
                  name: 'supportContactId',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::db',
                        name: 'OrderPnlTable_Order',
                      },
                      {
                        db: 'model::relational::tests::db',
                        name: 'Order_SalesPerson',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'PERSON_ID',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::db',
                        schema: 'default',
                        table: 'salesPersonTable',
                      },
                      tableAlias: 'salesPersonTable',
                    },
                  },
                },
              ],
              distinct: true,
              groupBy: [],
              name: 'orderNegativePnlView',
              primaryKey: ['ORDER_ID'],
            },
            {
              columnMappings: [
                {
                  name: 'ORDER_ID',
                  operation: {
                    _type: 'column',
                    column: 'ORDER_ID',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'orderNegativePnlView',
                    },
                    tableAlias: 'orderNegativePnlView',
                  },
                },
                {
                  name: 'pnl',
                  operation: {
                    _type: 'column',
                    column: 'pnl',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'orderNegativePnlView',
                    },
                    tableAlias: 'orderNegativePnlView',
                  },
                },
              ],
              distinct: false,
              groupBy: [],
              name: 'orderNegativePnlViewOnView',
              primaryKey: ['ORDER_ID'],
            },
            {
              columnMappings: [
                {
                  name: 'accountId',
                  operation: {
                    _type: 'column',
                    column: 'accountID',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::db',
                      schema: 'default',
                      table: 'orderTable',
                    },
                    tableAlias: 'orderTable',
                  },
                },
                {
                  name: 'orderPnl',
                  operation: {
                    _type: 'dynaFunc',
                    funcName: 'sum',
                    parameters: [
                      {
                        _type: 'elemtWithJoins',
                        joins: [
                          {
                            db: 'model::relational::tests::db',
                            name: 'OrderPnlTable_Order',
                          },
                        ],
                        relationalElement: {
                          _type: 'column',
                          column: 'pnl',
                          table: {
                            _type: 'Table',
                            database: 'model::relational::tests::db',
                            schema: 'default',
                            table: 'orderPnlTable',
                          },
                          tableAlias: 'orderPnlTable',
                        },
                      },
                    ],
                  },
                },
              ],
              distinct: false,
              groupBy: [
                {
                  _type: 'column',
                  column: 'accountID',
                  table: {
                    _type: 'Table',
                    database: 'model::relational::tests::db',
                    schema: 'default',
                    table: 'orderTable',
                  },
                  tableAlias: 'orderTable',
                },
              ],
              name: 'accountOrderPnlView',
              primaryKey: ['accountId'],
            },
          ],
        },
      ],
    },
    classifierPath: 'meta::relational::metamodel::Database',
  },
  {
    path: 'model::relational::tests::dbInc',
    content: {
      _type: 'relational',
      filters: [
        {
          _type: 'filter',
          name: 'FirmXFilter',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'LEGALNAME',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'firmTable',
                },
                tableAlias: 'firmTable',
              },
              {
                _type: 'literal',
                value: 'Firm X',
              },
            ],
          },
        },
      ],
      includedStores: [],
      joins: [
        {
          name: 'personViewWithFirmTable',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'firmTable',
                },
                tableAlias: 'firmTable',
              },
              {
                _type: 'column',
                column: 'firmId',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'PersonViewWithDistinct',
                },
                tableAlias: 'PersonViewWithDistinct',
              },
            ],
          },
        },
        {
          name: 'PersonWithPersonView',
          operation: {
            _type: 'dynaFunc',
            funcName: 'and',
            parameters: [
              {
                _type: 'dynaFunc',
                funcName: 'equal',
                parameters: [
                  {
                    _type: 'column',
                    column: 'ID',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::dbInc',
                      schema: 'default',
                      table: 'personTable',
                    },
                    tableAlias: 'personTable',
                  },
                  {
                    _type: 'column',
                    column: 'id',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::dbInc',
                      schema: 'default',
                      table: 'personViewWithGroupBy',
                    },
                    tableAlias: 'personViewWithGroupBy',
                  },
                ],
              },
              {
                _type: 'dynaFunc',
                funcName: 'equal',
                parameters: [
                  {
                    _type: 'column',
                    column: 'AGE',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::dbInc',
                      schema: 'default',
                      table: 'personTable',
                    },
                    tableAlias: 'personTable',
                  },
                  {
                    _type: 'column',
                    column: 'maxage',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::dbInc',
                      schema: 'default',
                      table: 'personViewWithGroupBy',
                    },
                    tableAlias: 'personViewWithGroupBy',
                  },
                ],
              },
            ],
          },
        },
        {
          name: 'Address_Firm',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'addressTable',
                },
                tableAlias: 'addressTable',
              },
              {
                _type: 'column',
                column: 'ADDRESSID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'firmTable',
                },
                tableAlias: 'firmTable',
              },
            ],
          },
        },
        {
          name: 'Address_Person',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'addressTable',
                },
                tableAlias: 'addressTable',
              },
              {
                _type: 'column',
                column: 'ADDRESSID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
            ],
          },
        },
        {
          name: 'Firm_Ceo',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'CEOID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'firmTable',
                },
                tableAlias: 'firmTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
            ],
          },
        },
        {
          name: 'Firm_Person',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'firmTable',
                },
                tableAlias: 'firmTable',
              },
              {
                _type: 'column',
                column: 'FIRMID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
            ],
          },
        },
        {
          name: 'FirmExtension_PersonExtension',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'firmId',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'firmExtensionTable',
                },
                tableAlias: 'firmExtensionTable',
              },
              {
                _type: 'column',
                column: 'FIRMID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'PersonTableExtension',
                },
                tableAlias: 'PersonTableExtension',
              },
            ],
          },
        },
        {
          name: 'Person_Location',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
              {
                _type: 'column',
                column: 'PERSONID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'locationTable',
                },
                tableAlias: 'locationTable',
              },
            ],
          },
        },
        {
          name: 'Person_Manager',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'MANAGERID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: '{target}',
                },
                tableAlias: '{target}',
              },
            ],
          },
          target: 't_personTable',
        },
        {
          name: 'location_PlaceOfInterest',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'locationTable',
                },
                tableAlias: 'locationTable',
              },
              {
                _type: 'column',
                column: 'locationID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'placeOfInterestTable',
                },
                tableAlias: 'placeOfInterestTable',
              },
            ],
          },
        },
        {
          name: 'Person_OtherFirm',
          operation: {
            _type: 'dynaFunc',
            funcName: 'equal',
            parameters: [
              {
                _type: 'column',
                column: 'FIRMID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
              {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'otherFirmTable',
                },
                tableAlias: 'otherFirmTable',
              },
            ],
          },
        },
      ],
      name: 'dbInc',
      package: 'model::relational::tests',
      schemas: [
        {
          name: 'productSchema',
          tables: [
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'NAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
              ],
              name: 'productTable',
              primaryKey: ['ID'],
            },
          ],
          views: [],
        },
        {
          name: 'default',
          tables: [
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'FIRSTNAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'LASTNAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'AGE',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'ADDRESSID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'FIRMID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'MANAGERID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
              ],
              name: 'personTable',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'FIRSTNAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'LASTNAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'AGE',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'ADDRESSID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'FIRMID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'MANAGERID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'birthDate',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
              ],
              name: 'PersonTableExtension',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'FIRSTNAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'LASTNAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'AGE',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'ADDRESSID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'FIRMID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'MANAGERID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
              ],
              name: 'differentPersonTable',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'LEGALNAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'ADDRESSID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'CEOID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
              ],
              name: 'firmTable',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'firmId',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'legalName',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'establishedDate',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
              ],
              name: 'firmExtensionTable',
              primaryKey: ['firmId'],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'LEGALNAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'ADDRESSID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
              ],
              name: 'otherFirmTable',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'TYPE',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'NAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'STREET',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 100,
                  },
                },
                {
                  name: 'COMMENTS',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 100,
                  },
                },
              ],
              name: 'addressTable',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'PERSONID',
                  nullable: true,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'PLACE',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
                {
                  name: 'date',
                  nullable: true,
                  type: {
                    _type: 'Date',
                  },
                },
              ],
              name: 'locationTable',
              primaryKey: ['ID'],
            },
            {
              columns: [
                {
                  name: 'ID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'locationID',
                  nullable: false,
                  type: {
                    _type: 'Integer',
                  },
                },
                {
                  name: 'NAME',
                  nullable: true,
                  type: {
                    _type: 'Varchar',
                    size: 200,
                  },
                },
              ],
              name: 'placeOfInterestTable',
              primaryKey: ['ID', 'locationID'],
            },
          ],
          views: [
            {
              columnMappings: [
                {
                  name: 'PERSON_ID',
                  operation: {
                    _type: 'column',
                    column: 'ID',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::dbInc',
                      schema: 'default',
                      table: 'personTable',
                    },
                    tableAlias: 'personTable',
                  },
                },
                {
                  name: 'lastName',
                  operation: {
                    _type: 'column',
                    column: 'LASTNAME',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::dbInc',
                      schema: 'default',
                      table: 'personTable',
                    },
                    tableAlias: 'personTable',
                  },
                },
                {
                  name: 'firm_name',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::dbInc',
                        name: 'Firm_Person',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'LEGALNAME',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::dbInc',
                        schema: 'default',
                        table: 'firmTable',
                      },
                      tableAlias: 'firmTable',
                    },
                  },
                },
              ],
              distinct: false,
              groupBy: [],
              name: 'PersonFirmView',
              primaryKey: ['PERSON_ID'],
            },
            {
              columnMappings: [
                {
                  name: 'id',
                  operation: {
                    _type: 'column',
                    column: 'ID',
                    table: {
                      _type: 'Table',
                      database: 'model::relational::tests::dbInc',
                      schema: 'default',
                      table: 'personTable',
                    },
                    tableAlias: 'personTable',
                  },
                },
                {
                  name: 'maxage',
                  operation: {
                    _type: 'dynaFunc',
                    funcName: 'max',
                    parameters: [
                      {
                        _type: 'column',
                        column: 'AGE',
                        table: {
                          _type: 'Table',
                          database: 'model::relational::tests::dbInc',
                          schema: 'default',
                          table: 'personTable',
                        },
                        tableAlias: 'personTable',
                      },
                    ],
                  },
                },
              ],
              distinct: false,
              groupBy: [
                {
                  _type: 'column',
                  column: 'ID',
                  table: {
                    _type: 'Table',
                    database: 'model::relational::tests::dbInc',
                    schema: 'default',
                    table: 'personTable',
                  },
                  tableAlias: 'personTable',
                },
              ],
              name: 'personViewWithGroupBy',
              primaryKey: ['id'],
            },
            {
              columnMappings: [
                {
                  name: 'id',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::dbInc',
                        name: 'PersonWithPersonView',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'ID',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::dbInc',
                        schema: 'default',
                        table: 'personTable',
                      },
                      tableAlias: 'personTable',
                    },
                  },
                },
                {
                  name: 'firstName',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::dbInc',
                        name: 'PersonWithPersonView',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'FIRSTNAME',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::dbInc',
                        schema: 'default',
                        table: 'personTable',
                      },
                      tableAlias: 'personTable',
                    },
                  },
                },
                {
                  name: 'lastName',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::dbInc',
                        name: 'PersonWithPersonView',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'LASTNAME',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::dbInc',
                        schema: 'default',
                        table: 'personTable',
                      },
                      tableAlias: 'personTable',
                    },
                  },
                },
                {
                  name: 'firmId',
                  operation: {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::dbInc',
                        name: 'PersonWithPersonView',
                      },
                    ],
                    relationalElement: {
                      _type: 'column',
                      column: 'FIRMID',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::dbInc',
                        schema: 'default',
                        table: 'personTable',
                      },
                      tableAlias: 'personTable',
                    },
                  },
                },
              ],
              distinct: true,
              groupBy: [],
              name: 'PersonViewWithDistinct',
              primaryKey: ['id'],
            },
          ],
        },
      ],
    },
    classifierPath: 'meta::relational::metamodel::Database',
  },
  {
    path: 'model::relational::tests::simpleRelationalMapping',
    content: {
      _type: 'mapping',
      classMappings: [
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::Person',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::dbInc',
            schema: 'default',
            table: 'personTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::dbInc',
                schema: 'default',
                table: 'personTable',
              },
              tableAlias: 'personTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Person',
                property: 'firstName',
              },
              relationalOperation: {
                _type: 'column',
                column: 'FIRSTNAME',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
              source: 'model_pure_tests_model_simple_Person',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Person',
                property: 'age',
              },
              relationalOperation: {
                _type: 'column',
                column: 'AGE',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
              source: 'model_pure_tests_model_simple_Person',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Person',
                property: 'lastName',
              },
              relationalOperation: {
                _type: 'column',
                column: 'LASTNAME',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'personTable',
                },
                tableAlias: 'personTable',
              },
              source: 'model_pure_tests_model_simple_Person',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Person',
                property: 'firm',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::dbInc',
                    name: 'Firm_Person',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Person',
              target: 'model_pure_tests_model_simple_Firm',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::EntityWithAddress',
                property: 'address',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::dbInc',
                    name: 'Address_Person',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Person',
              target: 'model_pure_tests_model_simple_Address',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::EntityWithLocations',
                property: 'locations',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::dbInc',
                    name: 'Person_Location',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Person',
              target: 'model_pure_tests_model_simple_Location',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Person',
                property: 'manager',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::dbInc',
                    name: 'Person_Manager',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Person',
              target: 'model_pure_tests_model_simple_Person',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::Firm',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::dbInc',
            schema: 'default',
            table: 'firmTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::dbInc',
                schema: 'default',
                table: 'firmTable',
              },
              tableAlias: 'firmTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Firm',
                property: 'legalName',
              },
              relationalOperation: {
                _type: 'column',
                column: 'LEGALNAME',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'firmTable',
                },
                tableAlias: 'firmTable',
              },
              source: 'model_pure_tests_model_simple_Firm',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Firm',
                property: 'employees',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::dbInc',
                    name: 'Firm_Person',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Firm',
              target: 'model_pure_tests_model_simple_Person',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::EntityWithAddress',
                property: 'address',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::dbInc',
                    name: 'Address_Firm',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Firm',
              target: 'model_pure_tests_model_simple_Address',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::FirmExtension',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::dbInc',
            schema: 'default',
            table: 'firmExtensionTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'firmId',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::dbInc',
                schema: 'default',
                table: 'firmExtensionTable',
              },
              tableAlias: 'firmExtensionTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Firm',
                property: 'legalName',
              },
              relationalOperation: {
                _type: 'column',
                column: 'legalName',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'firmExtensionTable',
                },
                tableAlias: 'firmExtensionTable',
              },
              source: 'model_pure_tests_model_simple_FirmExtension',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::FirmExtension',
                property: 'establishedDate',
              },
              relationalOperation: {
                _type: 'column',
                column: 'establishedDate',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'firmExtensionTable',
                },
                tableAlias: 'firmExtensionTable',
              },
              source: 'model_pure_tests_model_simple_FirmExtension',
            },
            {
              _type: 'embeddedPropertyMapping',
              classMapping: {
                _type: 'embedded',
                class: 'model::pure::tests::model::simple::PersonExtension',
                primaryKey: [],
                propertyMappings: [
                  {
                    _type: 'relationalPropertyMapping',
                    property: {
                      class:
                        'model::pure::tests::model::simple::PersonExtension',
                      property: 'birthdate',
                    },
                    relationalOperation: {
                      _type: 'elemtWithJoins',
                      joins: [
                        {
                          db: 'model::relational::tests::dbInc',
                          name: 'FirmExtension_PersonExtension',
                        },
                      ],
                      relationalElement: {
                        _type: 'column',
                        column: 'birthDate',
                        table: {
                          _type: 'Table',
                          database: 'model::relational::tests::dbInc',
                          schema: 'default',
                          table: 'PersonTableExtension',
                        },
                        tableAlias: 'PersonTableExtension',
                      },
                    },
                    source: 'model_pure_tests_model_simple_FirmExtension',
                  },
                ],
                root: false,
              },
              property: {
                class: 'model::pure::tests::model::simple::FirmExtension',
                property: 'employeesExt',
              },
              source: 'model_pure_tests_model_simple_FirmExtension',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::Address',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::dbInc',
            schema: 'default',
            table: 'addressTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::dbInc',
                schema: 'default',
                table: 'addressTable',
              },
              tableAlias: 'addressTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Address',
                property: 'name',
              },
              relationalOperation: {
                _type: 'column',
                column: 'NAME',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'addressTable',
                },
                tableAlias: 'addressTable',
              },
              source: 'model_pure_tests_model_simple_Address',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Address',
                property: 'street',
              },
              relationalOperation: {
                _type: 'column',
                column: 'STREET',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'addressTable',
                },
                tableAlias: 'addressTable',
              },
              source: 'model_pure_tests_model_simple_Address',
            },
            {
              _type: 'relationalPropertyMapping',
              enumMappingId: 'GE',
              property: {
                class: 'model::pure::tests::model::simple::GeographicEntity',
                property: 'type',
              },
              relationalOperation: {
                _type: 'column',
                column: 'TYPE',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'addressTable',
                },
                tableAlias: 'addressTable',
              },
              source: 'model_pure_tests_model_simple_Address',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Address',
                property: 'comments',
              },
              relationalOperation: {
                _type: 'column',
                column: 'COMMENTS',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'addressTable',
                },
                tableAlias: 'addressTable',
              },
              source: 'model_pure_tests_model_simple_Address',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::Location',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::dbInc',
            schema: 'default',
            table: 'locationTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::dbInc',
                schema: 'default',
                table: 'locationTable',
              },
              tableAlias: 'locationTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Location',
                property: 'place',
              },
              relationalOperation: {
                _type: 'column',
                column: 'PLACE',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'locationTable',
                },
                tableAlias: 'locationTable',
              },
              source: 'model_pure_tests_model_simple_Location',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Location',
                property: 'censusdate',
              },
              relationalOperation: {
                _type: 'column',
                column: 'date',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'locationTable',
                },
                tableAlias: 'locationTable',
              },
              source: 'model_pure_tests_model_simple_Location',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::PlaceOfInterest',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::dbInc',
            schema: 'default',
            table: 'placeOfInterestTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::dbInc',
                schema: 'default',
                table: 'placeOfInterestTable',
              },
              tableAlias: 'placeOfInterestTable',
            },
            {
              _type: 'column',
              column: 'locationID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::dbInc',
                schema: 'default',
                table: 'placeOfInterestTable',
              },
              tableAlias: 'placeOfInterestTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::PlaceOfInterest',
                property: 'name',
              },
              relationalOperation: {
                _type: 'column',
                column: 'NAME',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::dbInc',
                  schema: 'default',
                  table: 'placeOfInterestTable',
                },
                tableAlias: 'placeOfInterestTable',
              },
              source: 'model_pure_tests_model_simple_PlaceOfInterest',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::Product',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::db',
            schema: 'productSchema',
            table: 'productTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::db',
                schema: 'productSchema',
                table: 'productTable',
              },
              tableAlias: 'productTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Product',
                property: 'name',
              },
              relationalOperation: {
                _type: 'column',
                column: 'NAME',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'productSchema',
                  table: 'productTable',
                },
                tableAlias: 'productTable',
              },
              source: 'model_pure_tests_model_simple_Product',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Product',
                property: 'synonyms',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'Product_Synonym',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Product',
              target: 'model_pure_tests_model_simple_Synonym',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::Synonym',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::db',
            schema: 'productSchema',
            table: 'synonymTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::db',
                schema: 'productSchema',
                table: 'synonymTable',
              },
              tableAlias: 'synonymTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Synonym',
                property: 'name',
              },
              relationalOperation: {
                _type: 'column',
                column: 'NAME',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'productSchema',
                  table: 'synonymTable',
                },
                tableAlias: 'synonymTable',
              },
              source: 'model_pure_tests_model_simple_Synonym',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Synonym',
                property: 'typeAsString',
              },
              relationalOperation: {
                _type: 'column',
                column: 'TYPE',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'productSchema',
                  table: 'synonymTable',
                },
                tableAlias: 'synonymTable',
              },
              source: 'model_pure_tests_model_simple_Synonym',
            },
            {
              _type: 'relationalPropertyMapping',
              enumMappingId: 'SynonymEnum',
              property: {
                class: 'model::pure::tests::model::simple::Synonym',
                property: 'type',
              },
              relationalOperation: {
                _type: 'column',
                column: 'TYPE',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'productSchema',
                  table: 'synonymTable',
                },
                tableAlias: 'synonymTable',
              },
              source: 'model_pure_tests_model_simple_Synonym',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Synonym',
                property: 'product',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'Product_Synonym',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Synonym',
              target: 'model_pure_tests_model_simple_Product',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::Trade',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::db',
            schema: 'default',
            table: 'tradeTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::db',
                schema: 'default',
                table: 'tradeTable',
              },
              tableAlias: 'tradeTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Trade',
                property: 'id',
              },
              relationalOperation: {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeTable',
                },
                tableAlias: 'tradeTable',
              },
              source: 'model_pure_tests_model_simple_Trade',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Trade',
                property: 'quantity',
              },
              relationalOperation: {
                _type: 'column',
                column: 'quantity',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeTable',
                },
                tableAlias: 'tradeTable',
              },
              source: 'model_pure_tests_model_simple_Trade',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Trade',
                property: 'account',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'Trade_Account',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Trade',
              target: 'model_pure_tests_model_simple_Account',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Trade',
                property: 'product',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'Trade_Product',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Trade',
              target: 'model_pure_tests_model_simple_Product',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Trade',
                property: 'date',
              },
              relationalOperation: {
                _type: 'column',
                column: 'tradeDate',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeTable',
                },
                tableAlias: 'tradeTable',
              },
              source: 'model_pure_tests_model_simple_Trade',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Trade',
                property: 'settlementDateTime',
              },
              relationalOperation: {
                _type: 'column',
                column: 'settlementDateTime',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeTable',
                },
                tableAlias: 'tradeTable',
              },
              source: 'model_pure_tests_model_simple_Trade',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Trade',
                property: 'latestEventDate',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'Trade_TradeEventViewMaxTradeEventDate',
                  },
                ],
                relationalElement: {
                  _type: 'column',
                  column: 'maxTradeEventDate',
                  table: {
                    _type: 'Table',
                    database: 'model::relational::tests::db',
                    schema: 'default',
                    table: 'tradeEventViewMaxTradeEventDate',
                  },
                  tableAlias: 'tradeEventViewMaxTradeEventDate',
                },
              },
              source: 'model_pure_tests_model_simple_Trade',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Trade',
                property: 'events',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'Trade_TradeEvent',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Trade',
              target: 'model_pure_tests_model_simple_TradeEvent',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::Order',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::db',
            schema: 'default',
            table: 'orderTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::db',
                schema: 'default',
                table: 'orderTable',
              },
              tableAlias: 'orderTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Order',
                property: 'id',
              },
              relationalOperation: {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
              source: 'model_pure_tests_model_simple_Order',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Order',
                property: 'quantity',
              },
              relationalOperation: {
                _type: 'column',
                column: 'quantity',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
              source: 'model_pure_tests_model_simple_Order',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Order',
                property: 'date',
              },
              relationalOperation: {
                _type: 'column',
                column: 'orderDate',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
              source: 'model_pure_tests_model_simple_Order',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Order',
                property: 'settlementDateTime',
              },
              relationalOperation: {
                _type: 'column',
                column: 'settlementDateTime',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderTable',
                },
                tableAlias: 'orderTable',
              },
              source: 'model_pure_tests_model_simple_Order',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Order',
                property: 'pnl',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'OrderPnlView_Order',
                  },
                ],
                relationalElement: {
                  _type: 'column',
                  column: 'pnl',
                  table: {
                    _type: 'Table',
                    database: 'model::relational::tests::db',
                    schema: 'default',
                    table: 'orderPnlView',
                  },
                  tableAlias: 'orderPnlView',
                },
              },
              source: 'model_pure_tests_model_simple_Order',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Order',
                property: 'pnlContact',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'OrderPnlView_Order',
                  },
                  {
                    db: 'model::relational::tests::db',
                    name: 'OrderPnlView_Person',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Order',
              target: 'model_pure_tests_model_simple_Person',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Order',
                property: 'zeroPnl',
              },
              relationalOperation: {
                _type: 'dynaFunc',
                funcName: 'case',
                parameters: [
                  {
                    _type: 'elemtWithJoins',
                    joins: [
                      {
                        db: 'model::relational::tests::db',
                        name: 'OrderPnlView_Order',
                      },
                    ],
                    relationalElement: {
                      _type: 'dynaFunc',
                      funcName: 'equal',
                      parameters: [
                        {
                          _type: 'column',
                          column: 'pnl',
                          table: {
                            _type: 'Table',
                            database: 'model::relational::tests::db',
                            schema: 'default',
                            table: 'orderPnlView',
                          },
                          tableAlias: 'orderPnlView',
                        },
                        {
                          _type: 'literal',
                          value: 0,
                        },
                      ],
                    },
                  },
                  {
                    _type: 'literal',
                    value: 'true',
                  },
                  {
                    _type: 'literal',
                    value: 'false',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Order',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::OrderPnl',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::db',
            schema: 'default',
            table: 'orderPnlView',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ORDER_ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::db',
                schema: 'default',
                table: 'orderPnlView',
              },
              tableAlias: 'orderPnlView',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::OrderPnl',
                property: 'pnl',
              },
              relationalOperation: {
                _type: 'column',
                column: 'pnl',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderPnlView',
                },
                tableAlias: 'orderPnlView',
              },
              source: 'model_pure_tests_model_simple_OrderPnl',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::OrderPnl',
                property: 'supportContactName',
              },
              relationalOperation: {
                _type: 'column',
                column: 'supportContact',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'orderPnlView',
                },
                tableAlias: 'orderPnlView',
              },
              source: 'model_pure_tests_model_simple_OrderPnl',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::OrderPnl',
                property: 'order',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'OrderPnlView_Order',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_OrderPnl',
              target: 'model_pure_tests_model_simple_Order',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::AccountPnl',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::db',
            schema: 'default',
            table: 'accountOrderPnlView',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'accountId',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::db',
                schema: 'default',
                table: 'accountOrderPnlView',
              },
              tableAlias: 'accountOrderPnlView',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::AccountPnl',
                property: 'pnl',
              },
              relationalOperation: {
                _type: 'column',
                column: 'orderPnl',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'accountOrderPnlView',
                },
                tableAlias: 'accountOrderPnlView',
              },
              source: 'model_pure_tests_model_simple_AccountPnl',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::AccountPnl',
                property: 'account',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'AccountPnlView_Account',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_AccountPnl',
              target: 'model_pure_tests_model_simple_Account',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::TradeEvent',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::db',
            schema: 'default',
            table: 'tradeEventTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'EVENT_ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::db',
                schema: 'default',
                table: 'tradeEventTable',
              },
              tableAlias: 'tradeEventTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::TradeEvent',
                property: 'eventType',
              },
              relationalOperation: {
                _type: 'column',
                column: 'eventType',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeEventTable',
                },
                tableAlias: 'tradeEventTable',
              },
              source: 'model_pure_tests_model_simple_TradeEvent',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::TradeEvent',
                property: 'date',
              },
              relationalOperation: {
                _type: 'column',
                column: 'eventDate',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'tradeEventTable',
                },
                tableAlias: 'tradeEventTable',
              },
              source: 'model_pure_tests_model_simple_TradeEvent',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::TradeEvent',
                property: 'initiator',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'TradeEvent_Person',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_TradeEvent',
              target: 'model_pure_tests_model_simple_Person',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::TradeEvent',
                property: 'traderAddress',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'TradeEvent_Person',
                  },
                  {
                    db: 'model::relational::tests::dbInc',
                    name: 'Address_Person',
                  },
                ],
                relationalElement: {
                  _type: 'dynaFunc',
                  funcName: 'concat',
                  parameters: [
                    {
                      _type: 'column',
                      column: 'NAME',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::db',
                        schema: 'default',
                        table: 'addressTable',
                      },
                      tableAlias: 'addressTable',
                    },
                    {
                      _type: 'column',
                      column: 'STREET',
                      table: {
                        _type: 'Table',
                        database: 'model::relational::tests::db',
                        schema: 'default',
                        table: 'addressTable',
                      },
                      tableAlias: 'addressTable',
                    },
                  ],
                },
              },
              source: 'model_pure_tests_model_simple_TradeEvent',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::Account',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::db',
            schema: 'default',
            table: 'accountTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::db',
                schema: 'default',
                table: 'accountTable',
              },
              tableAlias: 'accountTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Account',
                property: 'name',
              },
              relationalOperation: {
                _type: 'column',
                column: 'name',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'accountTable',
                },
                tableAlias: 'accountTable',
              },
              source: 'model_pure_tests_model_simple_Account',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Account',
                property: 'createDate',
              },
              relationalOperation: {
                _type: 'column',
                column: 'createDate',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'accountTable',
                },
                tableAlias: 'accountTable',
              },
              source: 'model_pure_tests_model_simple_Account',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Account',
                property: 'trades',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'Trade_Account',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Account',
              target: 'model_pure_tests_model_simple_Trade',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Account',
                property: 'orders',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'Order_Account',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Account',
              target: 'model_pure_tests_model_simple_Order',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Account',
                property: 'accountPnl',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'AccountPnlView_Account',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Account',
              target: 'model_pure_tests_model_simple_AccountPnl',
            },
          ],
          root: false,
        },
        {
          _type: 'relational',
          class: 'model::pure::tests::model::simple::Interaction',
          distinct: false,
          mainTable: {
            _type: 'Table',
            database: 'model::relational::tests::db',
            schema: 'default',
            table: 'interactionTable',
          },
          primaryKey: [
            {
              _type: 'column',
              column: 'ID',
              table: {
                _type: 'Table',
                database: 'model::relational::tests::db',
                schema: 'default',
                table: 'interactionTable',
              },
              tableAlias: 'interactionTable',
            },
          ],
          propertyMappings: [
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Interaction',
                property: 'id',
              },
              relationalOperation: {
                _type: 'column',
                column: 'ID',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'interactionTable',
                },
                tableAlias: 'interactionTable',
              },
              source: 'model_pure_tests_model_simple_Interaction',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Interaction',
                property: 'time',
              },
              relationalOperation: {
                _type: 'column',
                column: 'time',
                table: {
                  _type: 'Table',
                  database: 'model::relational::tests::db',
                  schema: 'default',
                  table: 'interactionTable',
                },
                tableAlias: 'interactionTable',
              },
              source: 'model_pure_tests_model_simple_Interaction',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Interaction',
                property: 'source',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'Interaction_Source',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Interaction',
              target: 'model_pure_tests_model_simple_Person',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Interaction',
                property: 'target',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'Interaction_Target',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Interaction',
              target: 'model_pure_tests_model_simple_Person',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Interaction',
                property: 'active',
              },
              relationalOperation: {
                _type: 'dynaFunc',
                funcName: 'case',
                parameters: [
                  {
                    _type: 'dynaFunc',
                    funcName: 'equal',
                    parameters: [
                      {
                        _type: 'column',
                        column: 'active',
                        table: {
                          _type: 'Table',
                          database: 'model::relational::tests::db',
                          schema: 'default',
                          table: 'interactionTable',
                        },
                        tableAlias: 'interactionTable',
                      },
                      {
                        _type: 'literal',
                        value: 'Y',
                      },
                    ],
                  },
                  {
                    _type: 'literal',
                    value: 'true',
                  },
                  {
                    _type: 'literal',
                    value: 'false',
                  },
                ],
              },
              source: 'model_pure_tests_model_simple_Interaction',
            },
            {
              _type: 'relationalPropertyMapping',
              property: {
                class: 'model::pure::tests::model::simple::Interaction',
                property: 'longestInteractionBetweenSourceAndTarget',
              },
              relationalOperation: {
                _type: 'elemtWithJoins',
                joins: [
                  {
                    db: 'model::relational::tests::db',
                    name: 'InteractionTable_InteractionViewMaxTime',
                  },
                ],
                relationalElement: {
                  _type: 'column',
                  column: 'maxTime',
                  table: {
                    _type: 'Table',
                    database: 'model::relational::tests::db',
                    schema: 'default',
                    table: 'interactionViewMaxTime',
                  },
                  tableAlias: 'interactionViewMaxTime',
                },
              },
              source: 'model_pure_tests_model_simple_Interaction',
            },
          ],
          root: false,
        },
      ],
      enumerationMappings: [
        {
          enumeration:
            'model::pure::tests::model::simple::GeographicEntityType',
          enumValueMappings: [
            {
              enumValue: 'CITY',
              sourceValues: [
                {
                  _type: 'integerSourceValue',
                  value: 1,
                },
              ],
            },
          ],
          id: 'GE',
        },
        {
          enumeration: 'model::pure::tests::model::simple::ProductSynonymType',
          enumValueMappings: [
            {
              enumValue: 'CUSIP',
              sourceValues: [
                {
                  _type: 'stringSourceValue',
                  value: 'CUSIP',
                },
              ],
            },
            {
              enumValue: 'ISIN',
              sourceValues: [
                {
                  _type: 'stringSourceValue',
                  value: 'ISIN',
                },
              ],
            },
          ],
          id: 'SynonymEnum',
        },
      ],
      includedMappings: [],
      name: 'simpleRelationalMapping',
      package: 'model::relational::tests',
      tests: [],
    },
    classifierPath: 'meta::pure::mapping::Mapping',
  },
  {
    path: 'model::MyService',
    content: {
      _type: 'service',
      autoActivateUpdates: true,
      documentation: '',
      execution: {
        _type: 'pureSingleExecution',
        func: {
          _type: 'lambda',
          body: [
            {
              _type: 'func',
              function: 'take',
              parameters: [
                {
                  _type: 'func',
                  function: 'project',
                  parameters: [
                    {
                      _type: 'func',
                      function: 'getAll',
                      parameters: [
                        {
                          _type: 'class',
                          fullPath: 'model::pure::tests::model::simple::Person',
                        },
                      ],
                    },
                    {
                      _type: 'collection',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: [
                        {
                          _type: 'lambda',
                          body: [
                            {
                              _type: 'property',
                              parameters: [
                                {
                                  _type: 'var',
                                  name: 'x',
                                },
                              ],
                              property: 'name',
                            },
                          ],
                          parameters: [
                            {
                              _type: 'var',
                              name: 'x',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      _type: 'collection',
                      multiplicity: {
                        lowerBound: 1,
                        upperBound: 1,
                      },
                      values: [
                        {
                          _type: 'string',
                          multiplicity: {
                            lowerBound: 1,
                            upperBound: 1,
                          },
                          values: ['Name'],
                        },
                      ],
                    },
                  ],
                },
                {
                  _type: 'integer',
                  multiplicity: {
                    lowerBound: 1,
                    upperBound: 1,
                  },
                  values: [1000],
                },
              ],
            },
          ],
          parameters: [],
        },
        mapping: 'model::relational::tests::simpleRelationalMapping',
        runtime: {
          _type: 'runtimePointer',
          runtime: 'model::MyRuntime',
        },
      },
      name: 'MyService',
      owners: [],
      package: 'model',
      pattern: '/testUrl',
      test: {
        _type: 'singleExecutionTest',
        asserts: [],
        data: '',
      },
    },
    classifierPath: 'meta::alloy::service::metamodel::Service',
  },
  {
    path: 'model::MyRuntime',
    content: {
      _type: 'runtime',
      name: 'MyRuntime',
      package: 'model',
      runtimeValue: {
        _type: 'engineRuntime',
        connections: [
          {
            store: {
              path: 'model::relational::tests::db',
              type: 'STORE',
            },
            storeConnections: [
              {
                connection: {
                  _type: 'connectionPointer',
                  connection: 'model::runtime::H2Connection',
                },
                id: 'connection_1',
              },
            ],
          },
        ],
        mappings: [
          {
            path: 'model::relational::tests::simpleRelationalMapping',
            type: 'MAPPING',
          },
        ],
      },
    },
    classifierPath: 'meta::pure::runtime::PackageableRuntime',
  },
  {
    path: 'model::runtime::H2Connection',
    content: {
      _type: 'connection',
      connectionValue: {
        _type: 'RelationalDatabaseConnection',
        authenticationStrategy: {
          _type: 'h2Default',
        },
        datasourceSpecification: {
          _type: 'static',
          databaseName: 'myDb',
          host: 'somehost',
          port: 999,
        },
        element: 'model::relational::tests::db',
        type: 'H2',
      },
      name: 'H2Connection',
      package: 'model::runtime',
    },
    classifierPath: 'meta::pure::runtime::PackageableConnection',
  },
];

export const simpleGraphFetch = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'serialize',
      parameters: [
        {
          _type: 'func',
          function: 'graphFetchChecked',
          parameters: [
            {
              _type: 'func',
              function: 'getAll',
              parameters: [
                {
                  _type: 'class',
                  fullPath: 'demo::other::NPerson',
                },
              ],
            },
            {
              _type: 'rootGraphFetchTree',
              class: 'demo::other::NPerson',
              subTrees: [
                {
                  _type: 'propertyGraphFetchTree',
                  parameters: [],
                  property: 'fullName',
                  subTrees: [],
                },
              ],
            },
          ],
        },
        {
          _type: 'rootGraphFetchTree',
          class: 'demo::other::NPerson',
          subTrees: [
            {
              _type: 'propertyGraphFetchTree',
              parameters: [],
              property: 'fullName',
              subTrees: [],
            },
          ],
        },
      ],
    },
  ],
  parameters: [],
};

export const firmPersonGraphFetch = {
  _type: 'lambda',
  body: [
    {
      _type: 'func',
      function: 'serialize',
      parameters: [
        {
          _type: 'func',
          function: 'graphFetchChecked',
          parameters: [
            {
              _type: 'func',
              function: 'getAll',
              parameters: [
                {
                  _type: 'class',
                  fullPath: 'demo::other::NFirm',
                },
              ],
            },
            {
              _type: 'rootGraphFetchTree',
              class: 'demo::other::NFirm',
              subTrees: [
                {
                  _type: 'propertyGraphFetchTree',
                  parameters: [],
                  property: 'nEmployees',
                  subTrees: [
                    {
                      _type: 'propertyGraphFetchTree',
                      parameters: [],
                      property: 'fullName',
                      subTrees: [],
                    },
                  ],
                },
                {
                  _type: 'propertyGraphFetchTree',
                  parameters: [],
                  property: 'incType',
                  subTrees: [],
                },
                {
                  _type: 'propertyGraphFetchTree',
                  parameters: [],
                  property: 'name',
                  subTrees: [],
                },
              ],
            },
          ],
        },
        {
          _type: 'rootGraphFetchTree',
          class: 'demo::other::NFirm',
          subTrees: [
            {
              _type: 'propertyGraphFetchTree',
              parameters: [],
              property: 'nEmployees',
              subTrees: [
                {
                  _type: 'propertyGraphFetchTree',
                  parameters: [],
                  property: 'fullName',
                  subTrees: [],
                },
              ],
            },
            {
              _type: 'propertyGraphFetchTree',
              parameters: [],
              property: 'incType',
              subTrees: [],
            },
            {
              _type: 'propertyGraphFetchTree',
              parameters: [],
              property: 'name',
              subTrees: [],
            },
          ],
        },
      ],
    },
  ],
  parameters: [],
};

export const m2mTestData = [
  {
    path: 'demo::other::IncType',
    content: {
      _type: 'Enumeration',
      name: 'IncType',
      package: 'demo::other',
      values: [
        {
          value: 'LLC',
        },
        {
          value: 'CORP',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Enumeration',
  },
  {
    path: 'demo::Firm',
    content: {
      _type: 'class',
      constraints: [
        {
          functionDefinition: {
            _type: 'lambda',
            body: [
              {
                _type: 'func',
                function: 'greaterThan',
                parameters: [
                  {
                    _type: 'func',
                    function: 'size',
                    parameters: [
                      {
                        _type: 'property',
                        parameters: [
                          {
                            _type: 'var',
                            name: 'this',
                          },
                        ],
                        property: 'employees',
                      },
                    ],
                  },
                  {
                    _type: 'integer',
                    multiplicity: {
                      lowerBound: 1,
                      upperBound: 1,
                    },
                    values: [2],
                  },
                ],
              },
            ],
            parameters: [],
          },
          name: 'constraintSize',
        },
      ],
      name: 'Firm',
      package: 'demo',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
          },
          name: 'employees',
          type: 'demo::Person',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'legalName',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'incType',
          type: 'String',
        },
      ],
      qualifiedProperties: [
        {
          body: [
            {
              _type: 'func',
              function: 'first',
              parameters: [
                {
                  _type: 'property',
                  parameters: [
                    {
                      _type: 'var',
                      name: 'this',
                    },
                  ],
                  property: 'employees',
                },
              ],
            },
          ],
          name: 'firstEmployee',
          parameters: [],
          returnMultiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          returnType: 'demo::Person',
        },
      ],
      superTypes: ['demo::LegalEntity'],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'demo::LegalEntity',
    content: {
      _type: 'class',
      name: 'LegalEntity',
      package: 'demo',
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'demo::Person',
    content: {
      _type: 'class',
      name: 'Person',
      package: 'demo',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'firstName',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'lastName',
          type: 'String',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'demo::other::NFirm',
    content: {
      _type: 'class',
      constraints: [
        {
          functionDefinition: {
            _type: 'lambda',
            body: [
              {
                _type: 'func',
                function: 'startsWith',
                parameters: [
                  {
                    _type: 'property',
                    parameters: [
                      {
                        _type: 'var',
                        name: 'this',
                      },
                    ],
                    property: 'name',
                  },
                  {
                    _type: 'string',
                    multiplicity: {
                      lowerBound: 1,
                      upperBound: 1,
                    },
                    values: ['MC'],
                  },
                ],
              },
            ],
            parameters: [],
          },
          name: 'namePrefix',
        },
      ],
      name: 'NFirm',
      package: 'demo::other',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
          },
          name: 'nEmployees',
          type: 'demo::other::NPerson',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'name',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'incType',
          type: 'demo::other::IncType',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'demo::other::NPerson',
    content: {
      _type: 'class',
      name: 'NPerson',
      package: 'demo::other',
      properties: [
        {
          multiplicity: {
            lowerBound: 1,
            upperBound: 1,
          },
          name: 'fullName',
          type: 'String',
        },
        {
          multiplicity: {
            lowerBound: 0,
            upperBound: 1,
          },
          name: 'age',
          type: 'Integer',
        },
      ],
    },
    classifierPath: 'meta::pure::metamodel::type::Class',
  },
  {
    path: 'demo::MyMapping',
    content: {
      _type: 'mapping',
      classMappings: [
        {
          _type: 'pureInstance',
          class: 'demo::other::NPerson',
          propertyMappings: [
            {
              _type: 'purePropertyMapping',
              explodeProperty: false,
              property: {
                class: 'demo::other::NPerson',
                property: 'fullName',
              },
              source: 'demo_other_NPerson',
              transform: {
                _type: 'lambda',
                body: [
                  {
                    _type: 'func',
                    function: 'plus',
                    parameters: [
                      {
                        _type: 'collection',
                        multiplicity: {
                          lowerBound: 3,
                          upperBound: 3,
                        },
                        values: [
                          {
                            _type: 'property',
                            parameters: [
                              {
                                _type: 'var',
                                name: 'src',
                              },
                            ],
                            property: 'firstName',
                          },
                          {
                            _type: 'string',
                            multiplicity: {
                              lowerBound: 1,
                              upperBound: 1,
                            },
                            values: [' '],
                          },
                          {
                            _type: 'property',
                            parameters: [
                              {
                                _type: 'var',
                                name: 'src',
                              },
                            ],
                            property: 'lastName',
                          },
                        ],
                      },
                    ],
                  },
                ],
                parameters: [],
              },
            },
          ],
          root: true,
          srcClass: 'demo::Person',
        },
        {
          _type: 'pureInstance',
          class: 'demo::other::NFirm',
          propertyMappings: [
            {
              _type: 'purePropertyMapping',
              explodeProperty: false,
              property: {
                class: 'demo::other::NFirm',
                property: 'nEmployees',
              },
              source: 'demo_other_NFirm',
              target: 'demo_other_NPerson',
              transform: {
                _type: 'lambda',
                body: [
                  {
                    _type: 'property',
                    parameters: [
                      {
                        _type: 'var',
                        name: 'src',
                      },
                    ],
                    property: 'employees',
                  },
                ],
                parameters: [],
              },
            },
            {
              _type: 'purePropertyMapping',
              explodeProperty: false,
              property: {
                class: 'demo::other::NFirm',
                property: 'name',
              },
              source: 'demo_other_NFirm',
              transform: {
                _type: 'lambda',
                body: [
                  {
                    _type: 'property',
                    parameters: [
                      {
                        _type: 'var',
                        name: 'src',
                      },
                    ],
                    property: 'legalName',
                  },
                ],
                parameters: [],
              },
            },
            {
              _type: 'purePropertyMapping',
              enumMappingId: 'demo_other_IncType',
              explodeProperty: false,
              property: {
                class: 'demo::other::NFirm',
                property: 'incType',
              },
              source: 'demo_other_NFirm',
              transform: {
                _type: 'lambda',
                body: [
                  {
                    _type: 'property',
                    parameters: [
                      {
                        _type: 'var',
                        name: 'src',
                      },
                    ],
                    property: 'incType',
                  },
                ],
                parameters: [],
              },
            },
          ],
          root: true,
          srcClass: 'demo::Firm',
        },
      ],
      enumerationMappings: [
        {
          enumeration: 'demo::other::IncType',
          enumValueMappings: [
            {
              enumValue: 'LLC',
              sourceValues: [
                {
                  _type: 'stringSourceValue',
                  value: 'llc',
                },
              ],
            },
            {
              enumValue: 'CORP',
              sourceValues: [
                {
                  _type: 'stringSourceValue',
                  value: 'Corporation',
                },
              ],
            },
          ],
        },
      ],
      includedMappings: [],
      name: 'MyMapping',
      package: 'demo',
      tests: [],
    },
    classifierPath: 'meta::pure::mapping::Mapping',
  },
];
