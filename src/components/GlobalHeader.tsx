"use client";

import React, { useState } from "react";
import {
	DatabaseOutlined,
	HomeOutlined,
	FormOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styles from "../styles/header.module.css";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
	{
		label: <Link href="/home">Home</Link>,
		key: "/home",
		icon: <HomeOutlined />,
	},
	{
		label: <Link href="/reimbursement">Request Reimbursement</Link>,
		key: "/reimbursement",
		icon: <FormOutlined />,
	},
	{
		label: <Link href="/dashboard">Request Dashboard</Link>,
		key: "/dashboard",
		icon: <DatabaseOutlined />,
	},
];

const GlobalHeader: React.FC = () => {
	const [current, setCurrent] = useState("/home");

	const onClick: MenuProps["onClick"] = (e) => {
		setCurrent(e.key);
	};

	return (
		<Menu
			className={styles.header}
			onClick={onClick}
			selectedKeys={[current]}
			mode="horizontal"
			items={items}
		/>
	);
};

export default GlobalHeader;
