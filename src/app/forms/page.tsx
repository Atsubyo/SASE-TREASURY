import { Form, Input } from "@/lib/antd";
import FormItem from "antd/es/form/FormItem";
import React from "react";

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 6 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 14 },
	},
};

const Forms: React.FC = () => {
	return (
		<Form {...formItemLayout} variant="outlined">
			<FormItem
				label="Input"
				name="Input"
				rules={[{ required: true, message: "Please input!" }]}
			>
				<Input />
			</FormItem>
		</Form>
	);
};

export default Forms;
