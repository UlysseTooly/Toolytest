// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4wuR6djweT7vAchr7evKHM
// Component: _Yie3ivvsh
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsniCroJ2MX1 } from "../blank_project/PlasmicGlobalVariant__Screen"; // plasmic-import: Ni-CroJ2mX1/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: 4wuR6djweT7vAchr7evKHM/projectcss
import sty from "./PlasmicContainer.module.css"; // plasmic-import: _Yie3ivvsh/css

export const PlasmicContainer__VariantProps = new Array("bg");

export const PlasmicContainer__ArgProps = new Array("children");

function PlasmicContainer__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsniCroJ2MX1()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbg__1]: hasVariant(variants, "bg", "_1"),
          [sty.rootbg__2]: hasVariant(variants, "bg", "_2"),
          [sty.rootbg__3]: hasVariant(variants, "bg", "_3")
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: null,
        value: args.children
      })}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicContainer__ArgProps,
      internalVariantPropNames: PlasmicContainer__VariantProps
    });

    return PlasmicContainer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContainer";
  } else {
    func.displayName = `PlasmicContainer.${nodeName}`;
  }
  return func;
}

export const PlasmicContainer = Object.assign(
  // Top-level PlasmicContainer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicContainer
    internalVariantProps: PlasmicContainer__VariantProps,
    internalArgProps: PlasmicContainer__ArgProps
  }
);

export default PlasmicContainer;
/* prettier-ignore-end */
