import { c as create_ssr_component, b as subscribe, d as each, i as is_promise, n as noop, v as validate_component, m as missing_component, e as escape } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
const exitBeforeEnter = writable(false);
const transitioning = writable(null);
const modals = writable([]);
function isLazyModal(component) {
  return typeof component.prototype === "undefined";
}
async function getComponent(component) {
  return component().then((res) => res.default);
}
const Modals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modals, $$unsubscribe_modals;
  let $transitioning, $$unsubscribe_transitioning;
  let $$unsubscribe_exitBeforeEnter;
  $$unsubscribe_modals = subscribe(modals, (value) => $modals = value);
  $$unsubscribe_transitioning = subscribe(transitioning, (value) => $transitioning = value);
  $$unsubscribe_exitBeforeEnter = subscribe(exitBeforeEnter, (value) => value);
  $$unsubscribe_modals();
  $$unsubscribe_transitioning();
  $$unsubscribe_exitBeforeEnter();
  return `${$modals.length > 0 ? `${slots.backdrop ? slots.backdrop({}) : ``}` : ``}

${slots.default ? slots.default({}) : `
  ${each($modals, (modal, i) => {
    return `
    ${isLazyModal(modal.component) ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
        ${slots.loading ? slots.loading({}) : ``}
      `;
      }
      return function(component) {
        return `
        ${validate_component(component || missing_component, "svelte:component").$$render(
          $$result,
          Object.assign(
            {
              isOpen: i === $modals.length - 1 && !$transitioning
            },
            modal.props
          ),
          {},
          {}
        )}
      `;
      }(__value);
    }(getComponent(modal.component))}` : `
      ${validate_component(modal.component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {
          isOpen: i === $modals.length - 1 && !$transitioning
        },
        modal.props
      ),
      {},
      {}
    )}`}`;
  })}
`}`;
});
const Popup_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "table.svelte-1q7hbb1{width:100%;border-collapse:collapse}th.svelte-1q7hbb1,td.svelte-1q7hbb1{padding:10px;border:1px solid #ddd}tr.svelte-1q7hbb1:nth-child(even){background-color:#f2f2f2}tr.svelte-1q7hbb1:hover{background-color:#ddd}th.svelte-1q7hbb1{background-color:#2c2c2c;color:white}.backdrop.svelte-1q7hbb1{position:fixed;top:0;bottom:0;right:0;left:0;background:rgba(0, 0, 0, 0.5)}button.svelte-1q7hbb1{background-color:#4CAF50;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer}button.svelte-1q7hbb1:hover{background-color:#45a049}button.svelte-1q7hbb1:active{background-color:#45a049}button.svelte-1q7hbb1:focus{outline:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1>Bitcoin Core Mutations</h1> 

${each(["NotKilled", "Running", "Pending", "Killed", "Ignored"], (status) => {
    return `<h2>${escape(status)} (${escape(data.mutations.filter((mutation) => mutation.status === status).length)})</h2>
    <table class="${"svelte-1q7hbb1"}"><thead><tr class="${"svelte-1q7hbb1"}"><th class="${"svelte-1q7hbb1"}">ID</th>
                <th class="${"svelte-1q7hbb1"}">Status</th>
                <th class="${"svelte-1q7hbb1"}">Time Start</th>
                <th class="${"svelte-1q7hbb1"}">Time End</th>
                <th class="${"svelte-1q7hbb1"}">File</th>
                <th class="${"svelte-1q7hbb1"}">Branch</th>
                <th class="${"svelte-1q7hbb1"}">PR Number</th>
                <th class="${"svelte-1q7hbb1"}">Patch</th>
                <th class="${"svelte-1q7hbb1"}">Action</th>
            </tr></thead>
        <tbody>${each(data.mutations.filter((mutation) => mutation.status === status), (mutation) => {
      return `<tr class="${"svelte-1q7hbb1"}"><td class="${"svelte-1q7hbb1"}">${escape(mutation.id)}</td>
                    <td class="${"svelte-1q7hbb1"}">${escape(mutation.status)}</td>
                    <td class="${"svelte-1q7hbb1"}">${escape(mutation.start_time ? new Date(mutation.start_time * 1e3).toLocaleString() : "")}</td>
                    <td class="${"svelte-1q7hbb1"}">${escape(mutation.end_time ? new Date(mutation.end_time * 1e3).toLocaleString() : "")}</td>
                    <td class="${"svelte-1q7hbb1"}">${escape(mutation.file)}</td>
                    <td class="${"svelte-1q7hbb1"}">${escape(mutation.branch)}</td>
                    <td class="${"svelte-1q7hbb1"}">${escape(mutation.pr_number ? mutation.pr_number : "N/A")}</td>
                    <td class="${"svelte-1q7hbb1"}"><button class="${"svelte-1q7hbb1"}">Patch
                        </button></td>
                    <td class="${"svelte-1q7hbb1"}"><button class="${"svelte-1q7hbb1"}">Rerun</button>
                        <button class="${"svelte-1q7hbb1"}">Ignore</button></td>
                </tr>`;
    })}</tbody>
    </table>`;
  })}

${validate_component(Modals, "Modals").$$render($$result, {}, {}, {
    backdrop: () => {
      return `<div slot="${"backdrop"}" class="${"backdrop svelte-1q7hbb1"}"></div>`;
    }
  })}`;
});
export {
  Page as default
};
