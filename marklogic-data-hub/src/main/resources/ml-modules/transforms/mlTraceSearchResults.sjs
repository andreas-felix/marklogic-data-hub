/**
  Copyright 2012-2019 MarkLogic Corporation

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var trace = require("/data-hub/4/impl/trace-lib.xqy");

function transform(context, params, content) {
  var response = content.toObject();

  for (var i = 0; i < response.results.length; i++) {
    var result = response.results[i];
    var doc = cts.doc(result.uri);
    result.content = trace.traceToJsonSlim(doc);
    response.pageLength = response['page-length'];
  }
  return response;
}

exports.transform = transform;
