import { mount } from "@vue/test-utils";
import Button from "../src/button";

describe("button", () => {
  it("should render correctly", () => {
    const wrapper = mount({
      components: { Button },
      template: `
        <Button :data="data"></Button>
      `,
      setup() {
        const data = [
          {
            label: "一级 1",
            level: 1,
            children: [
              {
                label: "二级 1-1",
                level: 2,
                children: [
                  {
                    label: "三级 1-1-1",
                    level: 3,
                  },
                ],
              },
            ],
          },
          {
            label: "一级 2",
            level: 1,
            open: true, // 新增
            children: [
              {
                label: "二级 2-1",
                level: 2,
                children: [
                  {
                    label: "三级 2-1-1",
                    level: 3,
                  },
                ],
              },
              {
                label: "二级 2-2",
                level: 2,
                children: [
                  {
                    label: "三级 2-2-1",
                    level: 3,
                  },
                ],
              },
            ],
          },
          {
            label: "一级 3",
            level: 1,
            open: true, // 新增
            children: [
              {
                label: "二级 3-1",
                level: 2,
                children: [
                  {
                    label: "三级 3-1-1",
                    level: 3,
                  },
                ],
              },
              {
                label: "二级 3-2",
                level: 2,
                open: true, // 新增
                children: [
                  {
                    label: "三级 3-2-1",
                    level: 3,
                  },
                ],
              },
            ],
          },
          {
            label: "一级 4",
            level: 1,
          },
        ];

        return {
          data,
        };
      },
    });

    expect(wrapper.classes()).toContain("devui-button");
  });
});
